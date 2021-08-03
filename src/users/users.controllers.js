const User = require("./users.model");

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res
        .status(200)
        .send({user: savedUser, message: "User created in database"})
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.findUser = async (req, res) => {
    try {
        const user= req.params.username;
        const targetUser = await User.findOne({username: user});
        res.status(200).send({ user: targetUser, message: "User found" })
    } catch (error) {
        res.status(500).send(error)
    }
}; 

exports.deleteUser = async (req,res) => {
    try {
        const user = req.params.username;
        const removeUser = await User.findOneAndDelete({username: user});
        res.status(200).send({ user: removeUser, message: "User deleted"})
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.updateUser = async (req, res) => {
    try {
       const user = req.body.username;
       const pass = req.body.password;
       const email = req.body.email;
       const filter = req.body.currentUser;
       const modifyUser = await User.updateOne({username: filter},{username: user, password: pass, email: email});
       res.status(200).send({ user: modifyUser, message: "User modified"}) 
    } catch (error) {
        res.status(500).send(error) 
    }
};