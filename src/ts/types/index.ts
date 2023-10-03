export type typeUseGet = {
  path?: string;
  queryKey?: string;
};

export type typeUsePost = {
  path?: string;
  queryKey?: string;
  onError?: (data: any) => void;
  onSuccess?: (data: any) => void;
};

export type typeUseDelete = {
  path?: string;
  queryKey?: string;
  onError?: (data: any) => void;
  onSuccess?: (data: any) => void;
};

export type typeUseUpdate = {
  path?: string;
  queryKey?: string;
  onError?: (data: any) => void;
  onSuccess?: (data: any) => void;
};
