import { ref, onMounted, onUnmounted } from 'vue';

const MOBILE_BREAKPOINT = 768;

export function useMobile() {
  const isMobile = ref<boolean | undefined>(undefined);

  const checkDevice = () => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
    }
  };

  onMounted(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice);
  });

  return { isMobile };
}
