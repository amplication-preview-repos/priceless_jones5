import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactCreateInput = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  user?: UserWhereUniqueInput | null;
};
