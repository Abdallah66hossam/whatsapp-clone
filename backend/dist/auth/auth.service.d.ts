import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from './schemas/user.schema';
import { SignUpDto, SignInDto } from './dto/auth.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<{
        token: string;
        user: any;
    }>;
    signIn(signInDto: SignInDto): Promise<{
        token: string;
        user: any;
    }>;
    validateUser(userId: string): Promise<User>;
}
