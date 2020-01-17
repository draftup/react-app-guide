import { AppState } from "../types/app";
import { createCollectionCache } from "./createCollectionCache";
import { createForm } from "./createForm";
import { createTaskCandidate } from "./createTaskCandidate";
import { createUser } from "./createUser";

export const createAppState = (): AppState => ({
    tasks: createCollectionCache(),
    taskForm: createForm(createTaskCandidate()),
    user: createUser()
})