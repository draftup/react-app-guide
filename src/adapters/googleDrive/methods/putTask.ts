import { Task } from "../types/domain/task";

export const putTaskToLocalStorage = (tasks: Task[]) => {
    window.localStorage.set('tasks', JSON.stringify(tasks));
}