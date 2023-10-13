import { get } from "lodash";
import { api } from "services";
import { useMutation } from "@tanstack/react-query";

interface typeUsePost {
  path?: string;
  queryKey?: string;
  onError?: (data: any) => void;
  onSuccess?: (data: any) => void;
};

const usePost = ({
  path = "",
  onError = () => {},
  onSuccess = () => {},
}: typeUsePost) => {
  const response = useMutation({
    mutationFn: (data: any) => {
      return api.post(path, data).then((response) => {
        return get(response, "data");
      });
    },
    onError: (error) => onError(error),
    onSuccess: (successData) => onSuccess(successData),
  });
  return response;
};

export default usePost;
