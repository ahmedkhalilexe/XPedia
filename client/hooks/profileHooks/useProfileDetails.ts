import { useQuery } from "react-query";
import { privateAxios } from "@/utils/axios";
import { userProfileResponse } from "@/utils/types";

const useProfileDetails = (userId: string, accessToken: string) => {
  return useQuery({
    queryKey: ["profile", userId],
    queryFn: async () => {
      return privateAxios
        .get("/users/id", {
          params: {
            userId,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data as userProfileResponse);
    },
  });
};

export default useProfileDetails;
