import { ref, readonly, markRaw, nextTick } from 'vue';
import type { ToastProps } from '@/types';

interface InternalToastProps extends ToastProps {
  id: string;
  timer?: number;
  component?: any; // For custom toast content
}

const toasts = ref<InternalToastProps[]>([]);
const TOAST_LIMIT = 3; // Max number of toasts to show at once
const DEFAULT_DURATION = 5000;

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

export function useToast() {
  const addToast = (props: Omit<InternalToastProps, 'id'>) => {
    const id = genId();
    const duration = props.duration ?? DEFAULT_DURATION;

    const newToast: InternalToastProps = {
      ...props,
      id,
      open: true,
      onOpenChange: (isOpen: boolean) => {
        if (!isOpen) {
          removeToast(id);
        }
      },
    };

    // If there's a component, mark it raw to prevent Vue observation
    if (newToast.component) {
      newToast.component = markRaw(newToast.component);
    }
    
    toasts.value = [newToast, ...toasts.value].slice(0, TOAST_LIMIT);

    if (duration !== Infinity) {
      newToast.timer = window.setTimeout(() => {
        removeToast(id);
      }, duration);
    }
    
    return id;
  };

  const removeToast = (id: string) => {
    const toastIndex = toasts.value.findIndex(t => t.id === id);
    if (toastIndex > -1) {
      const toastToRemove = toasts.value[toastIndex];
      if (toastToRemove.timer) {
        clearTimeout(toastToRemove.timer);
      }
      // Set open to false to allow for exit animation
      toasts.value[toastIndex].open = false;
      // Actually remove from array after a short delay for animation
      nextTick(() => {
        setTimeout(() => {
          toasts.value = toasts.value.filter(t => t.id !== id);
        }, 300); // Match animation duration
      });
    }
  };

  const dismiss = (id?: string) => {
    if (id) {
      removeToast(id);
    } else {
      toasts.value.forEach(toast => removeToast(toast.id));
    }
  };

  const toast = (options: Omit<InternalToastProps, 'id' | 'open' | 'onOpenChange'>) => {
    return addToast(options);
  }

  return {
    toasts: readonly(toasts),
    toast,
    dismiss,
  };
}
