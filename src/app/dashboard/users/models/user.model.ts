export interface UserModel {
  id: number;
  name: string;
  department: {name: string; slug: string};
  jobTitle: {name: string; slug: string};
  progress: string;
  profile?: string;
  actions?: string[];
}

export interface UserSimpleModel {
  id: number;
  name: string;
  department: string;
  jobTitle: string;
  progress: string;
  profile?: string;
  actions?: string[];
}
