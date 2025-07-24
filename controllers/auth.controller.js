const bcrypt = require("bcrypt")
const User = require("../model/User")
const JWT = require("jsonwebtoken")

require("dotenv").config();






const signUp = async (request, response) => {

    try {

     

        const { firstName, lastName, email, password } = request.body

        const isUserAlreadyInOurDatabase = await User.findOne({
            email
        })

        if (isUserAlreadyInOurDatabase) {

            return response.status(409).json({

                m: " user already exist "
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        let createUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword
        })


        await createUser.save();

        const token = JWT.sign(
            { id: createUser._id, email: createUser.email },
            process.env.JWTSecretkey,
            { expiresIn: "1h" })


        const userT = { ...createUser._doc, }
        delete userT.password;


        return response.status(201).json({
            message: "Signup successful",
             userT,
            token

        });




    } catch (error) {

        return response.status(500).json({
            error: "Internal server error",
            erorr: error.message
        });
    }
};






const login = async (request, response) => {
    try {



        const { email , password } = request.body
        const user = await User.findOne({

            email
        })


        if (!user) {

            return response.status(400).json({

                m: " invalid credentials"

            })

        }

        const token = JWT.sign(
            { id: user._id, email: user.email },
            process.env.JWTSecretkey,
            { expiresIn: "1d" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password)



        if (!isPasswordCorrect) {

            return response.status(401).json({

                m: " invalid credentials"

            })


        }

        return response.status(200).json({

            m: "login successfully",
                user,

                token 
        })
    } catch (error) {

        return response.status(500).json({

            erorr: error.message
        });


    }


}

module.exports = {
    signUp,
    login
}


