import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  email?: SortOrder;
  userId?: SortOrder;
};
