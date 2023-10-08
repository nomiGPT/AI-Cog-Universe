import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { GithubOAuthService } from '../services/github-o-auth.service';
import {
  accountRepositoryMock,
  AUTH_PAYLOAD_MOCK,
  discordOauthServiceMock,
  githubOauthServiceMock,
  loginServiceMock,
} from 'src/mocks';
import { DiscordOAuthService } from 'src/modules/authentication/services/discord-o-auth.service';
import { AccountRepository } from 'src/repositories/account/account.repository';
import { LoginService } from 'src/modules/authentication/services/login.service';

const MOCK_ACCOUNT = {
  id: 'id',
  username: 'username',
  email: 'email',
  avatar: 'avatar',
  bio: 'bio',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('LoginController', () => {
  let controller: LoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        {
          provide: GithubOAuthService,
          useValue: githubOauthServiceMock,
        },
        {
          provide: DiscordOAuthService,
          useValue: discordOauthServiceMock,
        },
        {
          provide: AccountRepository,
          useValue: accountRepositoryMock,
        },
        {
          provide: LoginService,
          us