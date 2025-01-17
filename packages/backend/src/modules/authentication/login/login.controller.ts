
import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';
import { GithubOAuthDto } from '../../../dto/github-o-auth.dto';
import { GithubOAuthService } from '../services/github-o-auth.service';
import { Public } from '../../../decorator/public';
import { LoginService } from '../services/login.service';
import { DiscordOAuthService } from '../services/discord-o-auth.service';
import { DiscordOAuthDto } from '../../../dto/discord-o-auth.dto';
import { ZodValidationPipe } from '../../../pipes/zod-validation/zod-validation.pipe';
import { discordLoginSchema, githubLoginSchema } from './validation.schema';
import { SecureRequest } from '../../../types/secure-request';
import { AccountRepository } from 'src/repositories/account/account.repository';

@Controller('login')
export class LoginController {
  constructor(
    private readonly githubOauthService: GithubOAuthService,
    private readonly discordOauthService: DiscordOAuthService,
    private readonly accountRepository: AccountRepository,
    private readonly loginService: LoginService,
  ) {}

  @Public()
  @Post('github')
  githubLogin(
    @Body(new ZodValidationPipe(githubLoginSchema)) oAuth: GithubOAuthDto,
  ) {
    return this.githubOauthService.loginWithGithub(oAuth.code);
  }

  @Public()
  @Post('discord')
  discordLogin(
    @Body(new ZodValidationPipe(discordLoginSchema)) oAuth: DiscordOAuthDto,
  ) {
    return this.discordOauthService.loginWithDiscord(oAuth.code);
  }

  @Public()
  @Get('validate')
  validate(@Query('access_token') access_token: string) {
    return this.loginService.validate(access_token);
  }

  @Get('account-info')
  getAccountInfo(@Request() request: SecureRequest) {
    const { uid } = request.authPayload;
    return this.accountRepository.getAccountById(uid);
  }
}