const {signUp} = require("../models/auth");
const bcrypt = require("bcrypt");
const authController = {
    signUp: async (req, res)=>{
        const {email, password, firstName, lastName, dateOfBirth} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await signUp(
            {email, password:hashedPassword, firstName, lastName,dateOfBirth: new Date(dateOfBirth)});
        res.json(newUser);
    },
    signIn:(req, res)=>{}
};

module.exports = authController;