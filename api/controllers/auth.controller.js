import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10)
  const newUser = new User({ username, email, password:hashedPassword});
  await newUser.save();
  try {
    res.status(201).json("User created successfully");
  } catch {
    res.status(500).json(error.message);
  }
};
 
// export const signup =  (req, res) => {
//     console.log(req.body);
//   };
