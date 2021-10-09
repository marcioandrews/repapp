export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  creationTime: string;
  updateTime: string;
  deletionTime: string;
}

export interface UserPayload {
  name: string;
  email: string;
  password: string;
}
