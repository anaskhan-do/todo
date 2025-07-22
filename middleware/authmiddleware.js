const JWT = require("jsonwebtoken")


const authMiddleware =  (request, response, next) => {

    try {

        const authheader = request.header.authorization

        if (!authheader) {

            return response.status(401).json({

                m: "token is missing  "

            })
        }


const token = authheader.split(" ")[1]


const decoded = JWT.verify(token, process.env.JWTSecretKey);


 request.user = decoded

next();
    


    } catch (error) {



        return res.status(401).json({
            message: "Invalid or expired token",
            error: error.message

    


        
})

    }
}

module.exports = authMiddleware