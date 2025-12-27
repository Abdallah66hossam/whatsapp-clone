import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { SignUpDto, SignInDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string; user: any }> {
    const { name, phone, password } = signUpDto;

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ phone });
    if (existingUser) {
      throw new ConflictException('Phone number already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await this.userModel.create({
      name,
      phone,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = this.jwtService.sign({ id: user._id, phone: user.phone });

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
      },
    };
  }

  async signIn(signInDto: SignInDto): Promise<{ token: string; user: any }> {
    const { phone, password } = signInDto;

    // Find user
    const user = await this.userModel.findOne({ phone });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const token = this.jwtService.sign({ id: user._id, phone: user.phone });

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
      },
    };
  }

  async validateUser(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
