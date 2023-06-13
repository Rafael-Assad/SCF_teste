const { fakeUsers } =  require("./fakeData");

const authenticate  = (username, password) => {
    const userLogged = fakeUsers.find(user => user.username === username && user.password === password);

    if(!userLogged){
        return false
    }

    const randomNumber = Math.floor(Math.random() * 101);

    if (userLogged) {
        const token = `secret${randomNumber}`

        const { password, ...userWithoutPassword } = userLogged;

        return {
            ...userWithoutPassword,
            token
        };
    }
}

module.exports = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    if(!username || !password){
        res.status(400).send({"error": "username and password are required to login"})
    }

    const userLogin = authenticate(username, password)

    if(!userLogin){
        res.status(401).send({"error": "username or password incorret"})
    } else {
        req.session.user = userLogin

        res.send({"message": "login successfull"})
    }

}
