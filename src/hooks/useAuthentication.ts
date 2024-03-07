import { registerAccount, loginAccount } from "@/apis/authen";
import { useMutation } from "react-query";

function useAuthentication() {
  const register = useMutation(registerAccount);
  const login = useMutation(loginAccount);
  return { register, login };
}

export default useAuthentication;
