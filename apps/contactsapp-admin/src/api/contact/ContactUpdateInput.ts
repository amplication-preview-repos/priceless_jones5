import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactUpdateInput = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  user?: UserWhereUniqueInput | null;
};
