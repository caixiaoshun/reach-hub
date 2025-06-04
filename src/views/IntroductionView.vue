<template>
  <AppLayout>
    <PageHeader :title="t('introductionTitle')"
      :subtitle="t('introductionSubtitle')" />

    <!-- Our Mission Section -->
    <PageSection class="bg-secondary">
      <div class="container mx-auto px-4 py-12 text-center">
        <Card class="p-8 shadow-lg rounded-xl bg-background transform hover:scale-105 transition-transform duration-300">
          <div class="flex justify-center mb-6">
            <Target class="h-16 w-16 text-primary" />
          </div>
          <h2 class="text-3xl font-bold text-primary mb-6">{{ t('missionTitle') }}</h2>
          <p class="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
            {{ t('missionDesc') }}
          </p>
        </Card>
      </div>
    </PageSection>

    <!-- Meet the Team Section -->
    <PageSection>
      <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold text-center text-primary mb-10">{{ t('meetTeamTitle') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card v-for="member in teamMembers" :key="member.id"
            class="overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div class="aspect-[3/2] bg-muted overflow-hidden">
              <img v-if="member.imageUrl" :src="member.imageUrl" :alt="member.name"
                class="w-full h-full object-cover" :data-ai-hint="member.imageAiHint" />
              <div v-else class="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
                <User class="w-16 h-16" />
              </div>
            </div>
            <CardHeader>
              <CardTitle class="text-xl text-primary">{{ member.name }}</CardTitle>
              <p class="text-sm text-accent font-semibold">{{ member.title }}</p>
            </CardHeader>
            <CardContent>
              <p class="text-foreground/80 text-sm mb-4">{{ member.bio }}</p>
              <div v-if="member.socials" class="flex space-x-3">
                <a v-if="member.socials.linkedin" :href="member.socials.linkedin" target="_blank" rel="noopener noreferrer"
                  class="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin class="w-5 h-5" />
                </a>
                <a v-if="member.socials.scholar" :href="member.socials.scholar" target="_blank" rel="noopener noreferrer"
                  class="text-muted-foreground hover:text-primary transition-colors">
                  <GraduationCap class="w-5 h-5" />
                </a>
                <a v-if="member.socials.twitter" :href="member.socials.twitter" target="_blank" rel="noopener noreferrer"
                  class="text-muted-foreground hover:text-primary transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.3 3.3 9.6 0 7.6-4.3 11.4-11.4 11.4H2.5c-1.2 0-2.3-.8-2.5-2 1.4.3 2.8.3 4.1.1-3.6-.5-5.8-4-5.8-8H.5c.7.8 1.6 1.4 2.6 1.7-.9-.6-1.9-2.2-1.9-3.8C1.2 6.4 2.1 5 3.6 5c1.3 0 2.5.8 3.1 1.7C10 5.2 14.3 3.3 16 3c-.2.8-.3 1.7-.3 2.5 0 3.4 2.5 6.4 5.6 7.4-1.2.3-2.3.4-3.4.4H16c-1.6 0-3.2-.7-4.4-1.9C10.6 10.6 9 9.2 7.6 7.5 9 7.1 10.4 7 11.8 7c.7 0 1.4.1 2.1.2 2.2.5 4.3 1.9 5.9 4.1.4.6.7 1.2.9 1.9.2.6.3 1.2.3 1.8z"/></svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageSection>

    <!-- Our Values Section -->
    <PageSection class="bg-secondary">
      <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold text-center text-primary mb-10">{{ t('coreValuesTitle') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in coreValues" :key="value.id"
            class="bg-background p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
            <div class="bg-primary/10 text-primary rounded-full p-4 mb-4 inline-flex">
              <component :is="value.icon" class="w-10 h-10" />
            </div>
            <h3 class="text-xl font-semibold text-primary mb-2">{{ value.title }}</h3>
            <p class="text-foreground/80 text-sm flex-grow">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </PageSection>

    <!-- Join Us Section -->
    <PageSection>
      <div class="container mx-auto px-4 py-16">
        <Card class="bg-gradient-to-r from-primary/90 via-primary to-accent/90 text-primary-foreground p-8 md:p-12 rounded-xl shadow-2xl text-center transform hover:scale-[1.02] transition-transform duration-300">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t('collaborationTitle') }}</h2>
          <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {{ t('collaborationDesc') }}
          </p>
          <Button size="lg" variant="secondary" class="bg-background text-primary hover:bg-background/90" @click="navigateToContact">
            <Send class="mr-2 h-5 w-5" />
            {{ t('getInTouch') }}
          </Button>
        </Card>
      </div>
    </PageSection>

  </AppLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import AppLayout from '@/components/layout/AppLayout.vue';
import PageHeader from '@/components/layout/PageHeader.vue';
import PageSection from '@/components/shared/PageSection.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, User, Linkedin, GraduationCap, Send, Lightbulb, Users, ShieldCheck, BookOpenCheck } from 'lucide-vue-next';

const router = useRouter();
const { t } = useI18n();

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  imageAiHint?: string;
  socials?: {
    linkedin?: string;
    scholar?: string;
    twitter?: string;
  };
}

const teamMembers = ref<TeamMember[]>([
  {
    id: 1,
    name: '陶品',
    title: '清华大学副教授',
    bio: '陶品博士于1997年和2002年在清华大学获得计算机科学与技术学士和博士学位，现任清华大学计算机科学与技术系副教授、普适计算教育部重点实验室副主任。发表论文80余篇，拥有10余项专利，研究方向为人机混合智能和多媒体嵌入式处理。',
    imageUrl: new URL('@/assets/biography/tp.jpg', import.meta.url).href,
    imageAiHint: 'professional woman scientist',
    socials: { linkedin: 'https://www.cs.tsinghua.edu.cn/info/1117/3542.htm', scholar: 'https://www.cs.tsinghua.edu.cn/info/1117/3542.htm' }
  },
  {
    id: 2,
    name: '王诗颖',
    title: '青海大学博士研究生',
    bio: '王诗颖于2015年获吉林农业大学工学学士学位，2018年获青海大学硕士学位，目前在青海大学攻读博士，研究方向为遥感图像处理，尤其是草地信息学。',
    imageUrl: new URL('@/assets/biography/wsy.jpg', import.meta.url).href,
    imageAiHint: 'software engineer',
    socials: { linkedin: 'https://cs.qhu.edu.cn/jxgz/jxysz/szgk/50127.htm', twitter: '#' }
  },
  {
    id: 3,
    name: '邹雪超',
    title: '北京交通大学博士生',
    bio: '邹雪超于2021年和2024年在青海大学分别获得工学学士和硕士学位，现为北京交通大学计算机与信息技术学院博士研究生，研究兴趣为计算机视觉，尤其是遥感图像处理。',
    imageUrl: new URL('@/assets/biography/zxc-2.jpg', import.meta.url).href,
    imageAiHint: 'female researcher',
    socials: { linkedin: 'https://github.com/XavierJiezou', scholar: '#' }
  },
]);

interface CoreValue {
  id: number;
  icon: any; 
  title: string;
  description: string;
}

const coreValues = ref<CoreValue[]>([
  { id: 1, icon: Lightbulb, title: t('innovation'), description: t('innovationDesc') },
  { id: 2, icon: Users, title: t('collaboration'), description: t('collaborationDesc') },
  { id: 3, icon: ShieldCheck, title: t('integrity'), description: t('integrityDesc') },
  { id: 4, icon: BookOpenCheck, title: t('openScience'), description: t('openScienceDesc') },
]);

const navigateToContact = () => {
  router.push('/contact');
};
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
