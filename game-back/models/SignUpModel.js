const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const signUpTemplate = new mongoose.Schema({
    username : {
        type: String, 
        required: [true, 'Please, enter a username'],
        unique : true,
        lowercase : true
    },
    email : {
        type: String,
        required: [true, 'Please, enter an email'],
        unique: true, 
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String, 
        required: [true, 'Please, enter a password'],
        minlength : [6, 'Minimum length must be 6 characters']
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

signUpTemplate.pre('save' , async function(next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    }
    catch(err) {
        next(err)
    }
})


signUpTemplate.statics.login = async function({username, password}) {
    try {
        const user = await User.findOne({username : username}) 
        console.log(user +  " is a user")
        if(user) {
            const bc = bcrypt.compare(password, user.password)
            if(bc) {
                return user
            }
        }
    }
    catch(err) {
        throw Error(err)
    }
   
}

const User = mongoose.model('users', signUpTemplate)
module.exports = User
