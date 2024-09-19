import { useMutation } from "react-query";
import { publicAxios } from "@/app/utils/axios";
import { signInPaylaod, signInResponse } from "@/app/utils/types";
import { useDispatch } from "react-redux";
import { signIn } from "@/app/redux/auth/userSlice";

const signInMutationFunction = async (data: signInPaylaod) => {
  const res = await publicAxios.post("/auth/signIn", { ...data });
  return res.data as signInResponse;
};

const useSignInMutation = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: signInMutationFunction,
    onSuccess: (data) => {
      dispatch(
        signIn({
          user: data.data,
          auth: {
            isAuth: true,
            loading: false,
          },
        }),
      );
      console.log("Sign In Success");
    },
  });
};

export default useSignInMutation;
