import jwt from "jsonwebtoken"

export const verifyTokenMiddleware = (req, res, next) => {
    console.log('Verificando el token...'); 
    try {
        const authHeader = req.headers.authorization;
        console.log('Authorization Header:', authHeader); 

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(400).json({ message: "Unauthorized" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded Token:', decoded);

        req.user = decoded;
        next();    
    } catch (error) {
        console.error('Error en el middleware verifyTokenMiddleware:', error); 
        return res.status(400).json({ message: "Unauthorized" });
    }
};
