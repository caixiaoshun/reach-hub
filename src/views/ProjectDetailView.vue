<template>
  <AppLayout>
    <PageHeader :title="project ? project.title : 'Loading Project...'" :subtitle="project ? 'Project Details' : ''"
      :showBackButton="true" />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div v-if="isLoading" class="flex justify-center items-center min-h-[60vh]">
        <ProjectDetailSkeleton />
      </div>

      <div v-else-if="project" class="space-y-12">
        <!-- Hero Image -->
        <div class="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img :src="project.imageUrl" :alt="`Image for ${project.title}`"
            :data-ai-hint="project.imageAiHint || 'project image'" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
        </div>





        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Left Column / Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Title and Subtitle -->
            <div>
              <!-- Back button removed from here, will be handled by PageHeader -->
              <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-2"> <!-- Removed pt-6 -->
                {{ project.title }}
              </h1>
              <p class="text-lg text-muted-foreground">
                {{ project.shortDescription }}
              </p>
            </div>

            <!-- Authors and Date -->
            <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div class="flex items-center">
                <Users class="w-4 h-4 mr-2" />
                <span>{{ project.authors.join(", ") }}</span>
              </div>
              <div class="flex items-center">
                <CalendarDays class="w-4 h-4 mr-2" />
                <span>Published: {{ project.year }}</span>
              </div>
            </div>
            <!-- Abstract Section -->
            <PageSection title="Abstract">
              <p class="text-foreground leading-relaxed whitespace-pre-line">
                {{ project.longDescription }}
              </p>
            </PageSection>


            <!-- Interactive Demo Section -->
            <PageSection v-if="project.demoType" title="Interactive Demo">
              <div v-if="project.demoType === 'segmentation'">
                <SegmentationDemo :exampleInputs="project.examples" :route_name="project.route_name" />
              </div>
              <div v-else class="text-muted-foreground">
                Interactive demo for this project type is not available.
              </div>
            </PageSection>
          </div>

          <!-- Right Column / Sidebar -->
          <div class="lg:col-span-1 space-y-8">
            <!-- Tags Section -->
            <PageSection title="Tags" v-if="project.tags && project.tags.length > 0" class="top-24">
              <div class="flex flex-wrap gap-2">
                <a v-for="tag in project.tags" :key="tag" :href="getTagWikiLink(tag)" target="_blank" rel="noopener noreferrer"
                  class="text-inherit no-underline"
                  :title="`Learn more about ${tag} on Wikipedia`">
                  <Badge variant="secondary" class="cursor-pointer hover:bg-secondary/80 transition-colors">
                    <TagIcon class="w-3.5 h-3.5 mr-1 text-muted-foreground" />
                    {{ tag }}
                  </Badge>
                </a>
              </div>
            </PageSection>

            <!-- Links & Resources -->
            <PageSection title="Links & Resources" v-if="project.publicationLink || project.repositoryLink">
              <div class="space-y-3">
                <a v-if="project.publicationLink" :href="project.publicationLink" target="_blank" rel="noopener noreferrer"
                  class="flex items-center text-primary hover:underline">
                  <ExternalLink class="w-4 h-4 mr-2" />
                  View Publication
                </a>
                <a v-if="project.repositoryLink" :href="project.repositoryLink" target="_blank" rel="noopener noreferrer"
                  class="flex items-center text-primary hover:underline">
                  <Github class="w-4 h-4 mr-2" />
                  View Repository
                </a>
              </div>
            </PageSection>
          </div>
        </div>

        <!-- Cite This Project Section -->
        <PageSection title="Cite This Project">
          <div class="bg-muted p-4 rounded-lg shadow">
            <pre class="text-sm text-muted-foreground whitespace-pre-wrap break-all relative group">
{{ bibtexCitation }}
<Button
  variant="ghost"
  size="icon"
  class="absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity"
  @click="copyBibtex"
  aria-label="Copy BibTeX citation"
>
  <Copy class="w-4 h-4" />
</Button>
            </pre>
          </div>
        </PageSection>

      </div>

      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-semibold mb-4">Project Not Found</h2>
        <p class="text-muted-foreground mb-6">
          The project you are looking for does not exist or could not be loaded.
        </p>
        <RouterLink to="/projects">
          <Button variant="outline">
            <ArrowLeft class="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </RouterLink>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import type { Project } from '@/types';
import { mockProjects } from '@/data/projects';
import AppLayout from "@/components/layout/AppLayout.vue";
// PageHeader is already imported and used, will update its props
import PageHeader from "@/components/layout/PageHeader.vue";
import PageSection from "@/components/shared/PageSection.vue";
import ProjectDetailSkeleton from "@/components/skeletons/ProjectDetailSkeleton.vue";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, CalendarDays, ExternalLink, ArrowLeft, Github, Copy } from "lucide-vue-next";
import SegmentationDemo from "@/components/demos/SegmentationDemo.vue";
import { tagToWikiMap, WIKIPEDIA_BASE_URL } from '@/utils/tagMappings';
// import { ElMessage } from 'element-plus';
import { useToast } from '@/composables/useToast';
import { Tag as TagIcon } from 'lucide-vue-next' // 可替换为你的图标源

const { toast } = useToast();
const route = useRoute();

const project = ref<Project | null>(null);
const isLoading = ref(true);

const projectId = computed(() => route.params.id as string);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pageHeaderProps = computed(() => {
  if (isLoading.value) {
    return {
      title: "Loading Project...",
      breadcrumbs: [{ text: "Projects", to: "/projects" }, { text: "Loading..." }],
      showBackButton: true,
    };
  }
  if (project.value) {
    return {
      title: project.value.title,
      subtitle: "Project Details",
      breadcrumbs: [{ text: "Projects", to: "/projects" }, { text: project.value.title }],
      showBackButton: true,
    };
  }
  return {
    title: "Project Not Found",
    breadcrumbs: [{ text: "Projects", to: "/projects" }, { text: "Not Found" }],
    showBackButton: true,
  };
});

onMounted(async () => {
  isLoading.value = true;
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  const foundProject = mockProjects.find(p => p.id === projectId.value);
  if (foundProject) {
    project.value = foundProject;
    // Update document title
    document.title = `Research Hub - ${foundProject.title}`;
  } else {
    project.value = null;
    document.title = 'Research Hub - Project Not Found';
  }
  isLoading.value = false;
});

const bibtexCitation = computed(() => {
  if (!project.value) return '';
  const firstAuthorLastName = project.value.authors.length > 0 ? project.value.authors[0].split(' ').pop() : 'UnknownAuthor';
  const year = typeof project.value.year === 'number' ? project.value.year : (project.value.year.match(/\d{4}/)?.[0] || 'N.D.');
  const titleKey = project.value.title.toLowerCase().split(/\s+/).slice(0, 3).join('');

  return `@article{${firstAuthorLastName}${year}${titleKey},
  title   = {${project.value.title}},
  author  = {${project.value.authors.join(' and ')}},
  year    = {${year}},
}`;
});

const copyBibtex = async () => {
  if (!project.value) return;
  try {
    await navigator.clipboard.writeText(bibtexCitation.value);
    toast({ title: 'Success', description: 'BibTeX citation copied to clipboard.', variant: 'default' });
  } catch (err) {
    console.error('Failed to copy BibTeX: ', err);
    toast({ title: 'Error', description: 'Failed to copy BibTeX to clipboard.', variant: 'destructive' });
  }
};

const getTagWikiLink = (tag: string): string => {
  const slug = tagToWikiMap[tag] || tag.replace(/\s+/g, '_'); // Fallback to simple slugification
  return `${WIKIPEDIA_BASE_URL}${encodeURIComponent(slug)}`;
};

</script>

<style scoped>
/* Scoped styles if needed */
.whitespace-pre-line {
  white-space: pre-line;
}
</style>
