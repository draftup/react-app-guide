export type UserActivity = 'TASKS_MANAGEMENT' | 'TASK_EDITING';

export type User = {
  currentActivities: Set<UserActivity>;
}