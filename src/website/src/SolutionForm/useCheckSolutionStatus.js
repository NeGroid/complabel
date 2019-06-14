import { useGet } from "use-http";
import useInterval from "@use-it/interval";

const useCheckSolutionStatus = taskUrl => {
  const [task, loading, error, get] = useGet(taskUrl);
  const isReady = task && task.result;
  const delay = !isReady ? 1000 : null;

  useInterval(() => {
    get();
  }, delay);

  return {
    task,
    loading,
    error
  };
};

export default useCheckSolutionStatus;
