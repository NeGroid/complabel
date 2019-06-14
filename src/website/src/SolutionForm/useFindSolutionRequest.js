import { usePost } from "use-http";

const useFindSolutionRequest = () => {
  const [data, loading, error, post] = usePost({
    baseUrl: "/api",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const onSubmit = form => {
    post("/solutions", form);
  };

  return {
    data,
    loading,
    error,
    onSubmit
  };
};

export default useFindSolutionRequest;
