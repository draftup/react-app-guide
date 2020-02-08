
export type TaskCandidate = {
  description: string;
}

export const createTaskCandidate = (): TaskCandidate => ({
  description: ''
})

export const createTaskCandidateModifier = (taskCandidate: TaskCandidate) => ({
  return() {
    return taskCandidate
  },
  setDescription(nextValue: string) {
    return createTaskCandidateModifier({
      ...taskCandidate,
      description: nextValue
    })
  }
})
