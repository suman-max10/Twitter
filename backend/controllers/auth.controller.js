/** @format */
import User from "../models/user.model.js";
export const signup = async (req, res) => {
  try {
    const {fullName, userName,email,password} = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    const existingUser = await User.findOne({username});
    if(existingUser){
      return res.status(400).json({error:"Username is already taken"});
    }

    const existingEmail = await User.findOne({email});
    if(existingEmail){
      return res.status(400).json({error:"Email is already exist"});
    }
    
  } catch (error) {
    
  }
};

export const login = async (req, res) => {
  res.json({
    data: "You hit the login",
  });
};

export const logout = async (req,res)=>{
    res.json({
        data:"You hit the logout",  
    });
}
