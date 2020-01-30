export type UserActivity = 'ACTIVITY1' | 'ACTIVITY2' | 'SCTIVITY3';

export type User = {
    fullName: string;
    currentActivities: UserActivity[];
}