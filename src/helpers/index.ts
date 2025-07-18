import { users } from "src/data";

export const getCurrentUser = (userId: number) => {
    const currentUser = users.find((user) => user.id === userId)
    return currentUser;
}