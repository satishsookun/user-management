export interface UserModel {
  id: number;
  name: string;
  department: string;
  jobTitle: string;
  progress: string;
  profile?: string;
  actions?: string[];
}
