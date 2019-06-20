import { useState, useCallback } from "react";
import usePostSolution from "./usePostSolution";
import useGetSolution from "./useGetSolution";
import useSolutionForm from "./useSolutionForm";

const useSolution = () => {
  const [url, isFormSubmitting, formError, submit] = usePostSolution();
  const onSubmit = useCallback(values => {
    submit(values);
    setForm(values);
  });
  const solutionForm = useSolutionForm(onSubmit);
  const [task, isTaskLoading, taskError] = useGetSolution(url);

  const isLoading = isFormSubmitting || isTaskLoading;
  const error = formError ? formError : taskError;

  return {
    ...solutionForm,
    task,
    isLoading,
    error
  };
};

export default useSolution;
