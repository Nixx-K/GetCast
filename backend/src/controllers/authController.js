import {prisma} from "../config/db.js";


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
};

export { register };