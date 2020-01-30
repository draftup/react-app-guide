import { User, Task } from "problem/types";
import { CollectionCache, Form } from "utility/types";
import { TaskCandidate, TaskCandidateValidationError } from "application/types";

export type App = {
    user: User;
    taskCollection: CollectionCache<number, Task>;
    taskForm: Form<TaskCandidate, TaskCandidateValidationError>;
}