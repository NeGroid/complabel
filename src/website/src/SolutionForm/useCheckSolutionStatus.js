import { useGet } from "use-http";

const useCheckSolutionStatus = taskUrl => {
  const [task, loading, error] = useGet(taskUrl, { onMount: true });
  return {
    task,
    loading,
    error
  };
};

export default useCheckSolutionStatus;
