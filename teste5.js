const {fakeData } =  require("./fakeData");

module.exports = function(req, res){
    const userId = parseInt(req.params.id);
    const userFound =  fakeData.find(user => user.id === userId);

    if(!userFound){
        res.status(400).send({"error": "The given user ID  is not on our Database"})
    } else {
        const userName = userFound.name;
        const userAccessAmount = userFound.accessAmount || 0
    
        res.send({"message": `Usuário ${userName} foi lido ${userAccessAmount} vezes.`});
    }
};