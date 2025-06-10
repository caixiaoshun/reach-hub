<template>
  <AppLayout>
    <PageHeader :title="t('contactTitle')" :subtitle="t('contactSubtitle')" />

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Contact Form Card -->
        <Card class="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle class="text-2xl font-semibold">{{ t('sendUsMessage') }}</CardTitle>
          </CardHeader>
          <CardContent>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <Label for="name" class="block text-sm font-medium text-foreground mb-1">{{ t('fullName') }}</Label>
                <Input id="name" v-model="formData.name" type="text" :placeholder="t('fullName')" required class="w-full">
                  <template #icon>
                    <User class="h-5 w-5 text-muted-foreground" />
                  </template>
                </Input>
              </div>
              <div>
                <Label for="email" class="block text-sm font-medium text-foreground mb-1">{{ t('emailAddress') }}</Label>
                <Input id="email" v-model="formData.email" type="email" :placeholder="t('emailAddress')" required class="w-full">
                  <template #icon>
                    <Mail class="h-5 w-5 text-muted-foreground" />
                  </template>
                </Input>
              </div>
              <div>
                <Label for="subject" class="block text-sm font-medium text-foreground mb-1">{{ t('subject') }}</Label>
                <Input id="subject" v-model="formData.subject" type="text" :placeholder="t('subject')" required class="w-full">
                   <template #icon>
                    <Edit3 class="h-5 w-5 text-muted-foreground" />
                  </template>
                </Input>
              </div>
              <div>
                <Label for="message" class="block text-sm font-medium text-foreground mb-1">{{ t('message') }}</Label>
                <Textarea id="message" v-model="formData.message" :placeholder="t('message')" rows="5" required class="w-full min-h-[120px]">
                </Textarea>
                 <!-- Note: Textarea does not currently support icons in the same way as Input. If icon is needed, custom styling would be required. -->
              </div>
              <div>
                <Button type="submit" class="w-full sm:w-auto" variant="default">
                  {{ t('send') }}
                  <Send class="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <!-- Contact Information Card -->
        <div class="space-y-8">
          <Card class="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle class="text-2xl font-semibold">{{ t('contactInfo') }}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-6">
              <div class="flex items-start space-x-3">
                <Mail class="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-foreground">{{ t('emailAddress') }}</h3>
                  <a href="mailto:contact@researchhub.edu" class="text-primary hover:underline">wangshiying.qhu@foxmail.com</a>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <Phone class="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-foreground">电话</h3>
                  <p class="text-muted-foreground">0971-5315609</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <MapPin class="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-foreground">地址</h3>
                  <p class="text-muted-foreground">青海省西宁市青海大学</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card class="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle class="text-xl font-semibold">{{ t('findUsOnline') }}</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="flex space-x-6">
                <a href="#" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors">
                  <Github class="h-8 w-8" />
                  <span class="sr-only">GitHub</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin class="h-8 w-8" />
                  <span class="sr-only">LinkedIn</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter class="h-8 w-8" />
                  <span class="sr-only">Twitter</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AppLayout from '@/components/layout/AppLayout.vue';
import PageHeader from '@/components/layout/PageHeader.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/composables/useToast';
import { User, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Edit3 } from 'lucide-vue-next';

const { t } = useI18n();

const { toast } = useToast();

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const handleSubmit = () => {
  // Basic form validation (can be expanded)
  if (!formData.value.name || !formData.value.email || !formData.value.subject || !formData.value.message) {
    toast({
      title: t('fillAllFields'),
      description: '',
      variant: 'destructive',
    });
    return;
  }

  // Simulate form submission
  console.log('Form submitted:', formData.value);
  toast({
    title: t('messageSent'),
    description: t('messageSentDesc'),
    variant: 'default',
  });

  // Reset form
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>

    