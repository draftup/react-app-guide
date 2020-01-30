import { Dispatch, ServiceAdapter } from "types/utilityTypes";
import { User } from "types/userTypes";
import { TaskCollection, TaskForm } from "types/taskTypes";
import { ServiceEvent } from "types/eventTypes/serviceEventType";
import { ViewEvent } from "types/eventTypes/viewEventType";

export type AppState = {
    user: User;
    taskCollection: TaskCollection;
    taskForm: TaskForm;
}

export type AppEvent = ViewEvent | ServiceEvent;

export type AppDispatch = Dispatch<AppEvent>;

export type AppAdapter = ServiceAdapter<AppState, ServiceEvent>;