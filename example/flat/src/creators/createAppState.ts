import { AppState } from "../types/appTypes";
import { createCollectionCache } from "./createCollectionCache";
import { createForm } from "./createForm";
import { createTaskCandidate } from "./createTaskCandidate";
import { createUser } from "./createUser";

export const createAppState = (): AppState => ({
    taskCollection: createCollectionCache(),
    taskForm: createForm(createTaskCandidate()),
    user: createUser()
})