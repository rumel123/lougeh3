const middleware = ({jwt,dotenv}) => {

    return async function auths(req,res,next){
        try {
            dotenv.config()
            const BearHeader = req.header["Authorization"]
            console.log("BearHeader" + req.header["Authorization"])
            if (typeof BearHeader !== 'undefined')
            {
                const bearer = BearHeader.split(' ')
                const bearerTokens = bearer[1]
                req.token = bearerTokens
                next()
            }
            else
            {
                console.log(Bearheader)
                return res.status(403).send(`This site is FORBIDIN`)
            }
            
        } catch (error) {   
            return res.status(401).send(`Your authentication is invalid/ or auth is failed to connect`)
        }
    }


}

module.exports = middleware