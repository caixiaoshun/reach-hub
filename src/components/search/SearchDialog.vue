<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X, Search } from 'lucide-vue-next';
import type { Project } from '@/types';
import { useRouter } from 'vue-router';
import { cn } from '@/utils/cn';

const props = defineProps<{
  isOpen: boolean;
  projects: Project[];
}>();

const { locale } = useI18n();

const emit = defineEmits(['update:isOpen']);

const searchQuery = ref('');
const searchInputRef = ref<HTMLInputElement | null>(null);
const router = useRouter();

const filteredProjects = computed(() => {
  if (!searchQuery.value.trim()) {
    return [];
  }
  const lowerQuery = searchQuery.value.toLowerCase();
  return props.projects.filter(project =>
    project.title.toLowerCase().includes(lowerQuery) ||
    project.authors.some(author => author.toLowerCase().includes(lowerQuery))
  ).slice(0, 10); // Limit results to display
});

watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    searchQuery.value = ''; // Reset search on open
    await nextTick(); // Wait for DOM update
    searchInputRef.value?.focus(); // Focus input when dialog opens
    document.addEventListener('keydown', handleKeydown);
  } else {
    document.removeEventListener('keydown', handleKeydown);
  }
});

function closeDialog() {
  emit('update:isOpen', false);
}

function navigateToProject(projectId: string) {
  router.push({ name: 'ProjectDetail', params: { id: projectId } });
  closeDialog();
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeDialog();
  }
}

</script>

<template>
  <teleport to="body">
    <Transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-start justify-center bg-background/80 backdrop-blur-sm p-4 pt-[10vh] sm:pt-[15vh]"
        @click.self="closeDialog"
        aria-modal="true"
        role="dialog"
      >
        <Transition
          enter-active-class="ease-out duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div 
            class="bg-card text-card-foreground w-full max-w-lg rounded-xl shadow-2xl border"
            role="document"
            v-if="isOpen"
          >
            <div class="p-1">
              <div class="flex items-center px-4 py-2 border-b">
                <Search class="h-5 w-5 mr-2 text-muted-foreground" />
                <Input
                  ref="searchInputRef"
                  v-model="searchQuery"
                  placeholder="Search projects by title or author..."
                  class="w-full h-10 border-0 focus-visible:ring-0 shadow-none text-base !bg-transparent"
                  aria-label="Search projects"
                  id="search-dialog-input"
                />
                <Button variant="ghost" size="icon" @click="closeDialog" class="ml-2 rounded-full" aria-label="Close search dialog">
                  <X class="h-5 w-5" />
                </Button>
              </div>
            
              <div class="max-h-[60vh] overflow-y-auto p-2 custom-scrollbar">
                <div v-if="searchQuery.trim() && filteredProjects.length === 0" class="text-muted-foreground text-center py-8 px-4">
                  <p class="text-lg">No projects found for "{{ searchQuery }}".</p>
                  <p class="text-sm">Try a different search term.</p>
                </div>
                
                <ul v-else-if="filteredProjects.length > 0" class="space-y-1">
                  <li v-for="project in filteredProjects" :key="project.id">
                    <button
                      @click="navigateToProject(project.id)"
                      :class="cn(
                        'w-full text-left p-3 hover:bg-muted/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card',
                      )"
                    >
                      <h3 class="font-medium text-primary-foreground">{{ locale === 'zh' ? project.titleZh || project.title : locale === 'bo' ? project.titleBo || project.title : project.title }}</h3>
                      <p class="text-sm text-muted-foreground">{{ project.authors.join(', ') }}</p>
                    </button>
                  </li>
                </ul>
                <div v-else-if="searchQuery.trim() === ''" class="text-muted-foreground text-center py-8 px-4">
                  <p class="text-lg">Search the Research Hub</p>
                  <p class="text-sm">Find projects by title, author, or keywords.</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
/* For a more subtle scrollbar if needed */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground));
}
/* Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--border)) transparent;
}
</style>
