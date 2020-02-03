export type UserActivity = 'ACTIVITY1' | 'ACTIVITY2' | 'ACTIVITY3';

export type User = {
    fullName: string;
    currentActivities: UserActivity[];
}

export const createUser = (): User => ({
    fullName: '',
    currentActivities: [],
})

export const modifyUser = (user: User) => ({
    return() {
        return user
    },
    setFullName(nextValue: string)  {
        return modifyUser({
            ...user,
            fullName: nextValue
        })
    },
    setActivity(activity: UserActivity) {
        return modifyUser({
            ...user,
            currentActivities: [activity]
        })
    },
    addActivity(activity: UserActivity) {
        return modifyUser({
            ...user,
            currentActivities: [...user.currentActivities, activity]
        })
    },
    removeActivity(activity: UserActivity) {
        return modifyUser({
            ...user,
            currentActivities: user.currentActivities.filter(act => act !== activity)
        })
    }
})