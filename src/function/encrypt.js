const encrypts = ({jwt,dotenv,token}) => {
    return async function(req,res,next){ 
            dotenv.config() 
            try {
                const tokens = { token:token }
                const accesstokens = jwt.sign(tokens,process.env.ACCESS_TOKEN_KEY)
                req.token = accesstokens  
            } catch (error) {
                console.log(error.message)
            }
         
    }
}

module.exports = encrypts