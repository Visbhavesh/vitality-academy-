import User from '../model/userSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = '123456789'; 

export const userLogIn = async (request, response) => {
    try {
        const { username, password } = request.body;
        const user = await User.findOne({ username });
        
        if(!user) {
            return response.status(401).json('Invalid Username or Password');
        }

        // Compare hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        
        if(isPasswordMatch) {
            // Generate access token
            const accessToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
            return response.status(200).json({ accessToken, message: `${username} login successful` });
        } else {
            return response.status(401).json('Invalid Username or Password');
        }

    } catch (error) {
        response.status(500).json({ message: error.message });        
    }
}


export const userSignUp = async (request, response) => {
    try {
        console.log("hello",request.body);
        const { username, password, email, firstname, lastname, phone } = request.body;
        
        // Check if the user already exists
        const existingUser = await User.findOne({ username });

        if(existingUser) {
            return response.status(401).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance with hashed password
        const newUser = new User({ 
            username,
            password: hashedPassword,
            email,
            firstname,
            lastname,
            phone
        });

        // Save the new user to the database
        await newUser.save();
        response.status(200).json({ message: 'User created successfully' });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}