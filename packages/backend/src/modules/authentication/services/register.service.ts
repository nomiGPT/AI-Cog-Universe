import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { OAuthProvider } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { AccountRepository } from 'src/repositories/account/account.repository';
import { GithubOAuthService } from './github-o-auth.service';
import { UserResponse } from '../../../types/github-types';

@Injectable()
export class RegisterService {
  constructor(
    private readonly configService: ConfigService,
    private readonly accountRepository: AccountRepository,
    private readonly loginService: GithubOAuthService,
  ) {}
