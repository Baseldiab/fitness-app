export interface AddUser {

  userType: {
    type: String,
    trim: true,
    required: true,
    enum: ["admin","user"]
},
fname: String,
lname: String,
age: Number
email: String,
password: String | null,
    // match:/^(?=.*\d)(?=.*[a-z][A-Z]).{6,20}$/
gender: String
}
