<template>
  <div class="w-full space-y-6">
    <div>
      <h3 class="text-lg font-semibold mb-3 text-foreground">Upload an Image</h3>
      <div class="flex items-center space-x-3 p-3 bg-muted rounded-lg shadow-sm">
        <Button @click="triggerFileInput" variant="outline" size="sm">
          <UploadCloud class="mr-2 h-4 w-4" />
          Choose File
        </Button>
        <span class="text-sm text-muted-foreground flex-grow truncate" :title="selectedFile ? selectedFile.name : 'No file selected'">
          {{ selectedFile ? selectedFile.name : 'No file selected' }}
        </span>
        <Button v-if="selectedFile" @click="clearFile" variant="ghost" size="sm" class="text-muted-foreground hover:text-destructive">
          <X class="mr-1 h-4 w-4" />
          Clear
        </Button>
        <input
          ref="fileInputRef"
          type="file"
          accept="image/*"
          class="hidden"
          @change="handleFileChange"
        />
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-3 text-foreground">Example Inputs</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Card
          v-for="example in exampleInputs"
          :key="example"
          class="cursor-pointer hover:shadow-lg transition-shadow duration-200 group overflow-hidden rounded-lg"
          role="button"
          tabindex="0"
        >
          <CardContent class="p-0">
            <div class="relative w-[256px] h-[256px] overflow-hidden rounded-md cursor-pointer group" @click="loadExample(example)">
              <img
                :src="example"
                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                data-ai-hint="example image"
              />
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div class="space-y-2">
        <h4 class="text-md font-semibold text-center text-foreground">Input Image</h4>
        <Card class="aspect-square w-full rounded-lg shadow-md">
          <CardContent class="p-4 flex items-center justify-center h-full">
            <div v-if="inputImageUrl" class="relative w-full h-full">
              <img
                :src="inputImageUrl"
                alt="Input for segmentation"
                class="object-contain w-full h-full rounded-md"
              />
            </div>
            <div v-else class="text-center text-muted-foreground">
              <ImagePlus class="mx-auto h-12 w-12 mb-2" />
              <p>Upload an image or select an example to see it here.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-2">
        <h4 class="text-md font-semibold text-center text-foreground">Segmentation Result</h4>
        <Card class="aspect-square w-full rounded-lg shadow-md">
          <CardContent class="p-4 flex items-center justify-center h-full">
            <div v-if="outputImageUrl" class="relative w-full h-full">
              <img
                :src="outputImageUrl"
                alt="Segmentation result"
                class="object-contain w-full h-full rounded-md"
              />
            </div>
             <div v-else-if="isPredicting" class="text-center text-muted-foreground">
              <Loader2 class="mx-auto h-12 w-12 animate-spin mb-2" />
              <p>Predicting...</p>
            </div>
            <div v-else class="text-center text-muted-foreground">
              <Sparkles class="mx-auto h-12 w-12 mb-2" />
              <p>Prediction will appear here.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <div class="flex justify-center pt-4">
      <Button @click="predictSegmentation" :disabled="!inputImageUrl || isPredicting" size="lg">
        <Wand2 class="mr-2 h-5 w-5" />
        Predict Segmentation
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ImagePlus, Sparkles, Wand2, UploadCloud, X, Loader2 } from 'lucide-vue-next';
// import { ElMessage } from 'element-plus';
import { useToast } from '@/composables/useToast';
import { post } from '@/http' // 确保你用的是我们封装好的 post 方法

const { toast } = useToast();
const fileInputRef = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);
const inputImageUrl = ref<string | null>(null);
const outputImageUrl = ref<string | null>(null);
const isPredicting = ref(false);

const props = defineProps<{
  exampleInputs?: string[],
  route_name?: string
}>()

const triggerFileInput = () => {
  fileInputRef.value?.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    if (!file.type.startsWith('image/')) {
      toast({ title: 'Error', description: "Invalid file type!", variant: 'destructive' });
      return;
    }
    selectedFile.value = file;
    inputImageUrl.value = URL.createObjectURL(file);
    outputImageUrl.value = null; // Clear previous prediction
  }
};

const clearFile = () => {
  selectedFile.value = null;
  inputImageUrl.value = null;
  outputImageUrl.value = null;
  if (fileInputRef.value) {
    fileInputRef.value.value = ''; // Reset file input
  }
};

const loadExample = async (example: string) => {
  try {
    const response = await fetch(example)
    const blob = await response.blob()
    const file = new File([blob], 'example.jpg', { type: blob.type })

    selectedFile.value = file
    inputImageUrl.value = URL.createObjectURL(file)
    outputImageUrl.value = null

    predictSegmentation()
  } catch (error) {
    toast({ title: 'Error', description: "Failed to load example image.", variant: 'destructive' });
  }
}


const predictSegmentation = async () => {
  if (!inputImageUrl.value || !props.route_name) return

  isPredicting.value = true
  outputImageUrl.value = null

  const formData = new FormData()

  try {
    // 上传用户文件（blob）或远程图片
    if (selectedFile.value) {
      formData.append('image', selectedFile.value)
    } else {
      // 示例图是 URL，需要先 fetch -> blob -> File
      const res = await fetch(inputImageUrl.value)
      const blob = await res.blob()
      const file = new File([blob], 'example.png', { type: blob.type })
      formData.append('image', file)
    }

    // 调用后端接口
    const baseURL = import.meta.env.VITE_API_BASE_URL || '/'
    const fullUrl = `${baseURL.replace(/\/$/, '')}/${props.route_name.replace(/^\//, '')}`
    const response = await post<{ image: string }>(fullUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    outputImageUrl.value = `data:image/png;base64,${response.image}`
    toast({ title: 'Success', description: 'Segmentation completed!', variant: 'default' });

  } catch (error) {
    // 回退到原始图像
    outputImageUrl.value = inputImageUrl.value
    toast({ title: 'Warning', description: 'Server error. Showing original image.', variant: 'default' }); // Or a 'warning' variant if available
  } finally {
    isPredicting.value = false
  }
}
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
