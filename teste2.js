const { fakeData } =  require("./fakeData");

module.exports = function(req, res){
    const sentName =  req.body.name;
    const sentJob =  req.body.job;
    const lastId = fakeData.slice(-1)[0].id || 0

    if(!sentName){
        res.status(404).send({"error": "Name is Required"})
    } else if(!sentJob){
        res.status(404).send({"error": "Job is Required"})
    }
    
    const newUser = {
        id: lastId + 1,
        name: sentName,
        job: sentJob
    }

    fakeData.push(newUser)

    res.send(newUser);
};