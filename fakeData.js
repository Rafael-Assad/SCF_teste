
const fakeData  =  [
    {
        id: 1,
        name: "João Oliveira",
        job: "Desenvolvedor"
    }
]

const fakePermissions = {
    admin: 'Admin',
    user: 'User'
}

const fakeUsers = [
    {
        id: 1,
        username: "Rafael",
        password: "simbora",
        role: fakePermissions.admin
    },
    {
        id: 2,
        username: "Camila",
        password: "eldorado",
        role: fakePermissions.user
    },
]

module.exports = {
    fakeData,
    fakeUsers,
    fakePermissions
};