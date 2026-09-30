export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  service: string;
  message: string;
  source: string;
  createdAt: string;
  read: boolean;
  emailed: boolean;
}

export interface CmsData {
  submissions: ContactSubmission[];
  mediaOverrides: Record<string, string>;
  contentOverrides: Record<string, string>;
  updatedAt: string;
}
