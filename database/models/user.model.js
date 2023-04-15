const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// ======================================
const userSchema = mongoose.Schema({
    userType: {
        type: String,
        trim: true,
        required: true,
        enum: ["admin","user"]
    },
    fname:{
        type:String,
        trim: true,
        required: true,
        capitalize: true
    }, 
    lname:{
        type:String,
        trim:true,
        required:true,
        capitalize: true
    },
    age:{
        type:Number,
        min:18,
        max:45,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) 
                throw new Error("invalid email format")
        }
    }, 
    password:{
        type:String,
        trim:true,
        match:/^(?=.*\d)(?=.*[a-z][A-Z]).{6,20}$/
    }, 
    gender:{
        type:String,
        trim:true,
        enum:["male", "female"]
    }, 
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true
})
// ==========================================
userSchema.virtual("myTasks", {
    ref:"Cart",
    localField:"_id",
    foreignField:"userId"
})
// ==========================================
userSchema.methods.toJSON = function(){
    const data = this.toObject()
    delete data.__v
    delete data.password
    delete data.tokens
    return data
}
// ==========================================
userSchema.pre("save", async function(){
    if(this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 12)
})
// ==========================================
userSchema.statics.loginMe = async (email, password) => {
    const userData = await userModel.findOne( { email } )
    if(!userData) throw new Error ("invalid email")
    const matched = await bcrypt.compare(password, userData.password)
    if(!matched) throw new Error ("invalid password")
    return userData
}
// ==========================================
userSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTKEY)
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}
// ==========================================
const userModel = mongoose.model("User", userSchema)
module.exports = userModel