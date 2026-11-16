import {prisma} from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

const register = async (req,res) => {
    const {email, password, role} = req.body;
    
    // Check if exists
    const userExists = await prisma.user.findUnique({
        where: {email: email},
    });

    if (userExists) {
        return res.status(400).json({error: "Użytkownik z tym adresem e-mail już istnieje"});
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create User
    /*
    model User {
  id String @id @default(uuid())
  email String @unique
  password String
  role UserRole

  createdAt DateTime @default(now())

  talentProfile TalentProfile?
  clientProfile ClientProfile?
}
    */
    const user = await prisma.user.create({
        data: {
            email, password: hashedPassword, role,
        },
    });

    //JWT Token generation
    const token = generateToken(user.id, res);

    res.status(201).json({
        status: "success",
        data:{
            user: {
                id: user.id,
                email: email,
                role: role,
            },
        token,
        },
    });
};



const login = async (req,res) => {
    const {email, password} = req.body;

    // Check if email exists in db
    const user = await prisma.user.findUnique({
        where: {email: email},
    });

    if (!user) {
        return res.status(401).json({error: "Niepoprawne hasło lub adres e-mail"});
    }

    //Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid){
        return res.status(401).json({error: "Niepoprawne hasło lub adres e-mail"});
    };


    //JWT Token generation
    const token = generateToken(user.id, res);

    res.status(201).json({
        status: "success",
        data:{
            user: {
                id: user.id,
                email: email,
            },
        token,
        },
    });
};



const logout = async (req,res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({
        status: "success",
        message: "Wylogowanie powiodło się",
    });
};



export { register,login, logout };