export enum Status {
  ACTIVE = "Active",
  PROGRESS = "Progress",
  DONE = "DONE",
}

export interface Cards {
  id: number;
  title: string;
  description: string;
  status: Status;
  creationTime: string;
  updateTime: string;
  deletionTime: string;
}
