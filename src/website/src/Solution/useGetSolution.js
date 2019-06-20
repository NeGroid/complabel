import { useGet } from "use-http";
import useInterval from "@use-it/interval";

export const useGetSolution = url => {
  const [data, loading, error, get] = useGet(url);
  const isReady = task && task.result;
  const delay = !isReady ? 1000 : null;

  useInterval(() => {
    get();
  }, delay);

  return {
    data,
    loading,
    error
  };
};

export default useGetSolution;
