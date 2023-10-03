import { get } from "lodash";
import { api } from "services";
import { typeUseDelete } from "ts/types";
import { useMutation } from "@tanstack/react-query";

const useDelete = ({
  path = "",
  onError = () => {},
  onSuccess = () => {},
}: typeUseDelete) => {
  const response = useMutation({
    mutationFn: (id: string) => {
      return api.delete(`${path}/${id}`).then((response) => {
        return get(response, "data");
      });
    },
    onError: (error) => onError(error),
    onSuccess: (successData) => onSuccess(successData),
  });
  return response;
};

export default useDelete;
