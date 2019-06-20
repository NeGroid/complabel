import { useCallback } from "react";
import { usePost } from "use-http";

export const usePostSolution = () => {
  const [data, loading, error, post] = usePost({ baseUrl: "/api" });
  const postSolution = useCallback(form => post("/solutions", form), []);

  return [data ? data.url : null, loading, error, postSolution];
};

export default usePostSolution;
