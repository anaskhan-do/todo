

const signUpMiddleware =  (request , response , next ) =>{ 


    try {

      const data = request.body

      const {firtName , lastName , email , password  } = data
      
            
      if(!firtName){

        return response.status(400).json({

            m : "firstName is required "
        })
      }


      
      if(!lastName){

        return response.status(400).json({

            m : "lastName is required "
        })
      }

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

module.exports = signUpMiddleware