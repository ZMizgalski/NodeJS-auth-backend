import jwt from 'jsonwebtoken';
import { User } from './models/user';


export const JWTWorker = {
    createJWT: (user: User) => jwt.sign(
        {
            id: user.id,
            username: user.username
        },
        process.env.JWT_SECRET!
    ),
    verifyJWT: (token: string) => jwt.verify(token, process.env.JWT_SECRET!)
};

