interface User {
  _id: object;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}

export type { User };