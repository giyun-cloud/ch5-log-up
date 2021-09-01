import { Address } from "./adress";

type User = {
  name: string;
  id: string;
  email: string;
  password: string;
  address?: Address;
}

export default User;