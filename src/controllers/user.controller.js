import {asyncHandler} from "../utils/asyncHandler.js"


const registerUser = asyncHandler( async(req,res) => {
    //get user details from frontent
    // validation - not empty
    // check if user alredy exists : username , email
    //check for image, check for  avatar
    //upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    //check for user creation 
    //return response


    const {fullName,email,username, password} = req.body
    console.log(" email: ", email)
})

export {registerUser,}