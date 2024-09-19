import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { signIn } from "@/app/redux/auth/userSlice";
import { signInResponse, signUpPayload } from "@/app/utils/types";
import { publicAxios } from "@/app/utils/axios";

const signUpMutationFunction = async (data: signUpPayload) => {
  const res = await publicAxios.post("/auth/signUp", { ...data });
  return res.data as signInResponse;
};

const useSignUpMutation = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: signUpMutationFunction,
    onSuccess: (data) => {
      console.log("Sign Up and Sign In Success");
    },
  });
};
export default useSignUpMutation;
