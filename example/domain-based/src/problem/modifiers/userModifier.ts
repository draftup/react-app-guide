import { User, UserActivity } from "problem/types";

export const modifyUser = (user: User) => ({
    done() {
        return user
    },
    setFullName(nextValue: string)  {
        return modifyUser({
            ...user,
            fullName: nextValue
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