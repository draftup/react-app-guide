import { Task } from "problem/types";

export const modifyTask = (task: Task) => ({
    done() {
        return task
    },
    setDescription(nextValue: string)  {
        return modifyTask({
            ...task,
            description: nextValue
        })
    },
    setDoneToTrue() {
        return modifyTask({
            ...task,
            done: true
        })
    }

})