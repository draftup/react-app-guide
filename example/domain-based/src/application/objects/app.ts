import { CollectionCache, Form } from "utility";
import { User, Task } from "problem";
import { TaskCandidate, TaskCandidateValidationError } from "application";

export type App = {
    user: User;
    taskCollection: CollectionCache<number, Task>;
    taskForm: Form<TaskCandidate, TaskCandidateValidationError>;
}