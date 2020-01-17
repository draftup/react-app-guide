import { User } from "../types/domains/userDomain";

export const createUser = (): User => ({
    currentActivities: new Set()
})