export enum Status {
  ACTIVE = "Active",
  PROGRESS = "Progress",
  DONE = "DONE",
}

export interface Card {
  id: number;
  title: string;
  description: string;
  status: Status;
  creationTime: string;
  updateTime: string;
  deletionTime: string;
}

export interface CardsPayload {
  title: string;
  description: string;
  status: Status;
}
