import { CollectionCache, Form } from "types/utilityTypes";

export type Task = {
  description: string;
  done: boolean;  
}

export type TaskCollection = CollectionCache<string, Task>;

export type TaskCandidate = {
  description: string;
}

export type TaskCandidateValidity = 'DESCRIPTION_REQUIRED';

export type TaskForm = Form<TaskCandidate, TaskCandidateValidity>;