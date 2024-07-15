import { User } from "../user/User";

export type Contact = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  phoneNumber: string | null;
  email: string | null;
  user?: User | null;
};
