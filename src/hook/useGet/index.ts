import { get } from "lodash";
import { api } from "services";
import { typeUseGet } from "ts/types";
import { useQuery } from "@tanstack/react-query";

const useGet = ({ path = "/", queryKey }: typeUseGet) => {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: () => api.get(path).then((response) => get(response, "data")),
  });

  return data;
};

export default useGet;
