const User = require('../models/SignUpModel')
const jwt = require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60

const createToken = ({id}) => {
    return token = jwt.sign({userId: id}, 'random', {
        expiresIn : maxAge
    })
}
const handleError = (err) => {
    console.log(err)
    let errors = {email : '',username : '', password : ''}
    if(err.code === 11000) {
         let key = err.keyValue
         let name = Object.keys(key)[0]
         errors[Object.keys(key)[0]] = name + ' already exists'
    } 
    if(err.message.includes('users validation failed:')) {
        // console.log(Object.values(err))
        Object.values(err.errors).forEach(({properties}) => { 
            errors[properties.path] =  properties.message 
        })
    } 
    return errors
}

module.exports.login_get = (req, res) => {
    //  res.render('login');
    res.send('login')
}
module.exports.login_post = async (req,res) => {
    const {username, password} = req.body 
    try {
       const user = await User.login({username, password})
       const token = createToken(user._id)
       res.cookie('user', token, {maxAge : maxAge * 1000})
       res.status(201).json({user : user._id}) 
    }
    catch(err) {
       const error = handleError(err)
       
       res.status(403).json(error)
    }
}
module.exports.register_get = (req, res) => {
    //  res.render('register');
    res.send('register')
}
module.exports.register_post = async (req, res) => {
     const {username, email, password} = req.body
     try {  
        const user = await User.create({username, email, password})
        const token = createToken(user._id)
        res.status(201).json({user: token})
     } 
     catch(err) { 
        const error = handleError(err)
        res.status(404).json({error})
     }
}    