const { fakeData } =  require("./fakeData");

const getUser = ( req, res, next ) => {
    const userId = parseInt(req.params.id)

    const userFound = fakeData.find(user => user.id === userId)

    if(userFound){
        userFound.accessAmount = userFound.accessAmount + 1 || 1
        res.status(201).send(userFound)
    } else{
        res.status(404).send({"error": "The given user ID  is not on our Database"})
    }
};

const getUsers = ( req, res, next ) => {
    res.send(fakeData);
};

module.exports = {
    getUser,
    getUsers
};