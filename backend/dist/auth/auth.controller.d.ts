import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<{
        token: string;
        user: any;
    }>;
    signIn(signInDto: SignInDto): Promise<{
        token: string;
        user: any;
    }>;
    getProfile(req: any): Promise<{
        id: any;
        name: any;
        phone: any;
    }>;
}
