import { JobDetail } from './job-detail.model';

export interface Experience {
  startDate: Date;
  endDate: Date;
  role: string;
  company: string;
  description: string;
  listJobDetail: JobDetail[];
}
