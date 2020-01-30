import { User } from "types/userTypes";

export const createUser = (): User => ({
    currentActivities: new Set()
})