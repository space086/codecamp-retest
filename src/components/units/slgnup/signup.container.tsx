import { useRouter } from "next/router";
import SignUpUI from "./signup.presenter";

export default function SignUp() {
  const router = useRouter();

  return <SignUpUI />;
}
