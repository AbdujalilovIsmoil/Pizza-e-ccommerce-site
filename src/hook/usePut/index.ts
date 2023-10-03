import { get } from "lodash";
import { api } from "services";
import { typeUseUpdate } from "ts/types";
import { useMutation } from "@tanstack/react-query";

const usePut = ({
  path = "",
  onError = () => {},
  onSuccess = () => {},
}: typeUseUpdate) => {
  const response = useMutation({
    mutationFn: (id: string) => {
      return api.put(`${path}/${id}`).then((response) => {
        return get(response, "data");
      });
    },
    onError: (error) => onError(error),
    onSuccess: (successData) => onSuccess(successData),
  });
  return response;
};

export default usePut;
