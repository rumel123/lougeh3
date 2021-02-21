const decrypts = ({jwt,dotenv}) => {
    return  async function(req,res,next){
        const token = req.header('auth-token')
        if(!token)
        {
            console.log(token)
        }
        try {
            /*dotenv.config 
           jwt.verify(req.token,process.env.ACCESS_TOKEN_KEY,(error,callbackData)=>{
                if(error) {res.status(403)}else{
                    next()
                }
            }) */
          const verified =  jwt.verify(token,process.env.ACCESS_TOKEN_KEY)
            req.user = verified
            } catch (error) {
            console.log("Error: ", error.message)
        }
    }
}

module.exports = decrypts