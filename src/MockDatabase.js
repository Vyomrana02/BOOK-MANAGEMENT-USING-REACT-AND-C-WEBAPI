export function UserData() {
    const Roles = {
        ADMIN: "ADMIN",
        USER: "USER",
    }
    const Users = [
        {
            email: "User",
            password: "User",
            Role: Roles.USER
        },
        {
            email: "Admin",
            password: "Admin",
            Role: Roles.ADMIN
        },
    ];
    return [Roles,Users];
}

