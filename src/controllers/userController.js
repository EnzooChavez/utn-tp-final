import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'




export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(users.length === 0){
            return res.status(204).json({message: "No users found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: "Internal server Error", error });
        
    }
}

export const createUsers = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({ email });
        if (userFound) {
            return res.status(400).json({ message: `User with email ${email} already exists` });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ ...req.body, password: hashedPassword });
        await newUser.save();
        return res.status(201).json({ message: "User created", user: newUser });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};


export const validate = async (req, res) => {
    console.log('Llegó la solicitud de login');  
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "There's a missing field" });
        }

        const normalizedEmail = email.toLowerCase();
        const userFound = await User.findOne({ email: normalizedEmail });

        if (!userFound) {
            return res.status(400).json({ message: "User or password is incorrect" });
        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(400).json({ message: "User or password is incorrect" });
        }

        const payload = {
            userId: userFound._id,
            userEmail: userFound.email,
            role: userFound.role
        };

        
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

        
        console.log('Generated Token:', token);

        return res.status(200).json({
            message: "Logged in",
            token,
            role: userFound.role,
            user: { id: userFound._id, email: userFound.email }
        });

    } catch (error) {
        console.error('Error en la función validate:', error);  
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};


console.log('SECRET:', process.env.SECRET);