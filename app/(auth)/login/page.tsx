import { getMetadata } from "@/utils/nonAsyncHelpers";
import Login from "./login";

export async function generateMetadata() {
  return getMetadata("Login", "This is the login page");
}

export default function LoginPage() {
  return <Login />;
}
