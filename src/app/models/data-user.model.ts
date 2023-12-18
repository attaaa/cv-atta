import { Certificate } from './certificate.model';
import { Education } from './education.model';
import { Experience } from './experience.model';
import { Portfolio } from './portfolio.model';
import { Skill } from './skill.model';
import { Social } from './social.model';

export interface DataUser {
  name: string;
  phone: number;
  email: string;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  certificates: Certificate[];
  portfolios: Portfolio[];
  // types for additional data
  socials: Social[];
}
