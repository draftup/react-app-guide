export type Task = {
  description: string;
  done: boolean;  
}

export const createTask = (): Task => ({
    description: '',
    done: false
})

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