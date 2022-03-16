
export interface DepartmentModel {
  name: string;
  slug: string;
}

export interface JobTitleModel {
  name: string;
  slug: string;
}

export interface CustomFileEvent extends Event {
  target: HTMLInputElement & EventTarget;
  dataTransfer: HTMLInputElement & EventTarget;
}
