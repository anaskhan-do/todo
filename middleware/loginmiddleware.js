

const loginMiddleware =  (request , response , next ) =>{ 


    try {



      const {email , password  } = request.body
      
      
      if(!email){

        return response.status(400).json({

            m : "email is required "
        })
      }
      if(!password){


        return response.status(401).json({

            m : "password is required"
        })

      }

    
next();
        
    } catch (error) {

       return response.status(401).json({
        
            erorr: error.message
        
    })

}
}

module.exports = loginMiddleware