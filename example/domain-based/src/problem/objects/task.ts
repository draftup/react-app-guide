export type Task = {
  description: string;
  done: boolean;  
}

export const createTask = (): Task => ({
    description: '',
    done: false
})

export const createTaskModifier = (task: Task) => ({
    return() {
        return task
    },
    setDescription(nextValue: string)  {
        return createTaskModifier({
            ...task,
            description: nextValue
        })
    },
    done() {
        return createTaskModifier({
            ...task,
            done: true
        })
    }

})