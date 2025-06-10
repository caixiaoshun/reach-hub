// import type { FunctionalComponent } from 'vue'; // No longer used
// import type { LucideProps } from 'lucide-vue-next'; // No longer used


export type RelatedPublication = {
  title: string;
  source: string; // e.g., "Journal of AI Research, 2023" or "International Conference on ML, 2022"
  link?: string;
};

export type Project = {
  id: string;
  title: string;
  titleZh?: string;
  titleBo?: string;
  authors: string[];
  year: number | string;
  shortDescription: string;
  shortDescriptionZh?: string;
  shortDescriptionBo?: string;
  longDescription: string;
  longDescriptionZh?: string;
  longDescriptionBo?: string;
  imageUrl: string;
  imageAiHint?: string; // Added for AI image generation hints
  tags?: string[];
  tagsZh?: string[];
  tagsBo?: string[];
  status?: 'Active' | 'Ongoing' | 'Completed' | 'Published'; // Added 'Active'
  publicationLink?: string;
  demoType?: 'mnist' | 'segmentation' | 'other'; // Added 'segmentation'
  researchArea?: string; 
  repositoryLink?: string; 
  relatedPublications?: RelatedPublication[]; 
  examples?: string[];
  route_name?: string;
  abstract?: string;
  citation?: string;
};

// Toast related types for Vue composable
export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  duration?: number;
  action?: ToastAction;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export type LucideIconName = 
  | 'Brain' 
  | 'Satellite' 
  | 'Leaf' 
  | 'BarChart2' 
  | 'Atom' 
  | 'ShieldCheck'
  | 'Users'
  | 'Mail'
  | 'MapPin'
  | 'Phone'
  | 'Linkedin'
  | 'Github'
  | 'Twitter'
  | 'Globe'
  | 'Lightbulb'
  | 'Scale'
  | 'Briefcase'
  | 'Target'
  | 'HeartHandshake'
  | 'BookOpenCheck'
  | 'Search'
  | 'FlaskConical'
  | 'HelpCircle'
  | 'DownloadCloud'
  | 'Link'
  | 'Database'
  | 'FileText'
  | 'Copy'
  | 'ChevronRight'
  | 'ArrowLeft'
  | 'Users2'
  | 'CalendarDays'
  | 'ExternalLink'
  | 'UploadCloud'
  | 'Trash2'
  | 'Image'
  | 'FileArchive'
  | 'Download'
  | 'Filter';

export type ResearchArea = {
  title: string;
  description: string;
  iconName: LucideIconName; // Changed from icon: FunctionalComponent<LucideProps>
  colorClass?: string; // Optional Tailwind text color class e.g. 'text-green-500'
  link?: string; // Optional link for "Learn More"
};

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  imageAiHint?: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    scholar?: string;
    twitter?: string;
  };
};

export type ValuePillar = {
  icon: LucideIconName;
  title: string;
  description: string;
};

export type DatasetLink = {
  label: string;
  url: string;
  type: 'github' | 'zip' | 'doi' | 'external' | 'paper';
  icon: LucideIconName;
};

export type SegDatasetSamplePreview = {
  type: 'image' | 'chart'; // Add more types if needed
  urlOrData: string; // URL for image, or data for chart (e.g., JSON string)
  caption?: string;
  maskUrlOrData?: string;
};

export type PanDatasetSamplePreview = {
  type: 'image' | 'chart'; // Add more types if needed
  nirOrData: string; // URL for image, or data for chart (e.g., JSON string)
  caption?: string;
  panUrlOrData?: string;
  rgbUrlOrData?: string;
  satellite?: string;
};


export type SegLegend = {
  label: string;
  color: string;
}

export type SegDataset = {
  id: string;
  title: string;
  titleZh?: string;
  titleBo?: string;
  authors: string[]; // Or contributors
  year: string | number;
  shortDescription: string;
  shortDescriptionZh?: string;
  shortDescriptionBo?: string;
  longDescription: string; // Full description
  longDescriptionZh?: string;
  longDescriptionBo?: string;
  abstract: string;
  tags: string[];
  tagsZh?: string[];
  tagsBo?: string[];
  imageUrl?: string; // For card display
  imageAiHint?: string;
  domain: string; // e.g., "Remote Sensing", "Urban Mapping", "Climate Science"
  status?: 'Available' | 'Archived' | 'In Progress' | 'Coming Soon';
  publicationLink?: string; // Link to a paper that uses or describes the dataset
  downloadLinks: DatasetLink[];
  sampleDataPreview?: SegDatasetSamplePreview[];
  citation?: string; // BibTeX or plain text citation
  article?: string;
  article_link?: string;
  legend?: SegLegend[];
  type: string;
};

export type Dataset = SegDataset | PanSharpeningDataset;

export type PanSharpeningDataset = {
  id: string;
  title: string;
  titleZh?: string;
  titleBo?: string;
  authors: string[]; // Or contributors
  year: string | number;
  shortDescription: string;
  shortDescriptionZh?: string;
  shortDescriptionBo?: string;
  longDescription: string; // Full description
  longDescriptionZh?: string;
  longDescriptionBo?: string;
  abstract: string;
  tags: string[];
  tagsZh?: string[];
  tagsBo?: string[];
  imageUrl?: string; // For card display
  imageAiHint?: string;
  domain: string; // e.g., "Remote Sensing", "Urban Mapping", "Climate Science"
  status?: 'Available' | 'Archived' | 'In Progress' | 'Coming Soon';
  publicationLink?: string; // Link to a paper that uses or describes the dataset
  downloadLinks: DatasetLink[];
  sampleDataPreview?: PanDatasetSamplePreview[];
  citation?: string; // BibTeX or plain text citation
  article?: string;
  article_link?: string;
  type: string;
};

