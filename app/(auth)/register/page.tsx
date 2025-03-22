import { getMetadata } from "@/utils/nonAsyncHelpers";
import Register from "./register";

export async function generateMetadata() {
  return getMetadata("Register", "This is the register page");
}

export default function LoginPage() {
  return <Register />;
}
