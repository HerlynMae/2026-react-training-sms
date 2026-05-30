import { useQuery } from "@tanstack/react-query";
import { queryData } from "./queryData";

const useQueryData = (
  endpoint,
  method,
  key = "",
  fd = {},
  id = null,
  refetchOnWindowFocus = false,
  queryProperty = {},
) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: async () => queryData(endpoint, method, fd),
    retry: false, //if fails, do not retry automatically
    refetchOnWindowFocus: refetchOnWindowFocus,
    cacheTime: 200,
    ...queryProperty,
  });
};

export default useQueryData;

// useQuery - React Query tool for fetching data
// queryData - your custom API function (from previous code)
//This hook is a reusable API fetch tool using React Query that automatically handles caching, fetching, and state management.
