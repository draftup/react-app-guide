
export type TaskCandidate = {
  description: string;
}

export const createTaskCandidate = (): TaskCandidate => ({
  description: ''
})

export const modifyTaskCandidate = (taskCandidate: TaskCandidate) => ({
  return() {
    return taskCandidate
  },
  setDescription(nextValue: string) {
    return modifyTaskCandidate({
      ...taskCandidate,
      description: nextValue
    })
  }
})
