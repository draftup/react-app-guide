export type UserActivity = 'ACTIVITY1' | 'ACTIVITY2' | 'ACTIVITY3';

export type User = {
    fullName: string;
    currentActivities: UserActivity[];
}

export const createUser = (): User => ({
    fullName: '',
    currentActivities: [],
})

export const createUserModifier = (user: User) => ({
    return() {
        return user
    },
    setFullName(nextValue: string)  {
        return createUserModifier({
            ...user,
            fullName: nextValue
        })
    },
    setActivity(activity: UserActivity) {
        return createUserModifier({
            ...user,
            currentActivities: [activity]
        })
    },
    addActivity(activity: UserActivity) {
        return createUserModifier({
            ...user,
            currentActivities: [...user.currentActivities, activity]
        })
    },
    removeActivity(activity: UserActivity) {
        return createUserModifier({
            ...user,
            currentActivities: user.currentActivities.filter(act => act !== activity)
        })
    }
})