


const cMiddlewareTodo = (request , response , next ) => {

try {


const { title, description } = request.body ;


        if (!title || !description) {
            return response.status(400).json({
                message: "Title and description are required"
            });
        }

next();

} catch (error) {

    return response.status(500).json({


        m : " mushkil hai ",
        error : error.message

    })
    
}
}

module.exports = cMiddlewareTodo