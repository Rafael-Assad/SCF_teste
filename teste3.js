const { fakeData, fakePermissions } =  require("./fakeData");

module.exports = function(req, res) {
    const isAdmin = req.session.user ? req.session.user.role === fakePermissions.admin : false

    if(!isAdmin){
        res.status(403).send({"error": "Operation not authorized"})
    } else {
        const userId = parseInt(req.params.id)
        const userFound = fakeData.find(user => user.id === userId)
        const userFoundIndex = fakeData.indexOf(userFound)

        if(userFoundIndex < 0){
            res.status(400).send({"error": "The given user ID  is not on our Database"})
        } else {
            fakeData.splice(userFoundIndex, 1)

            res.send({"message": "success"});
        }
    }
};