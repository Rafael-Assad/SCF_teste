const { fakeData, fakePermissions } =  require("./fakeData");


module.exports =  function(req, res) {
    const isAdmin = req.session.user ? req.session.user.role === fakePermissions.admin : false

    if(!isAdmin){
        res.status(403).send({"error": "Operation not authorized"})
    } else{
        const userId = parseInt(req.params.id)
        const sentName = req.body.name
        const sentJob = req.body.job

        // Since its a PUT instead a PATCH, added a validation to only update with all information sent
        if(!sentName || !sentJob){
            res.status(400).send({"error": "Name and Job are require to make this update"})
        }

        const userFound = fakeData.find(user => user.id === userId);

        if(!userFound){
            res.status(400).send({"error": "The given user ID  is not on our Database"})
        } else {
            userFound.name = sentName;
            userFound.job = sentJob;

            res.send(userFound);
        }
    }
};