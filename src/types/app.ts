import { Dispatch } from "./utils";

import { User } from "./domains/userDomain";
import { TaskCollection } from "./domains/taskDomain";
import { TaskForm } from "./domains/taskDomain";
import { UserEvent } from "./events/userEvent";
import { ServiceEvent } from "./events/serviceEvent";

export type AppState = {
    user: User;
    tasks: TaskCollection;
    taskForm: TaskForm;
}

export type AppEvent = UserEvent | ServiceEvent;

export type AppDispatch = Dispatch<AppEvent>;