import { TaskCandidate } from "application";

export type TaskCandidateValidationError = 'DESCRIPTION_REQUIRED';

export const createTaskCandidateValidationErrors = (taskCandidate: TaskCandidate): TaskCandidateValidationError[] => {
  const errors: TaskCandidateValidationError[] = [];

  if (!taskCandidate.description) {
    errors.push('DESCRIPTION_REQUIRED')
  }

  return errors
}