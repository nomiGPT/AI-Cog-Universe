
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AccessTokenResponse, UserResponse } from 'src/types/github-types';
import { JwtService } from '@nestjs/jwt';
import { OAuthProvider } from '@prisma/client';
import { AccountRepository } from 'src/repositories/account/account.repository';
import { GithubAuthPayload } from 'src/types/auth-payload';
import { AxiosService } from 'src/services/axios/axios.service';

@Injectable()
export class GithubOAuthService {
  private readonly clientID = this.configService.get('GITHUB_OAUTH_CLIENT_ID');
  private readonly clientSecret = this.configService.get(
    'GITHUB_OAUTH_CLIENT_SECRET',
  );

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly accountRepository: AccountRepository,
    private readonly axios: AxiosService,
  ) {}

  async githubAccessToken(code: string): Promise<AccessTokenResponse> {
    const response = await this.axios.get<AccessTokenResponse>(
      `https://github.com/login/oauth/access_token?client_id=${this.clientID}&client_secret=${this.clientSecret}&code=${code}`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    if (!response.data.access_token) throw new UnauthorizedException();

    return response.data;
  }

  async githubUser(accessToken: string): Promise<UserResponse> {
    const response = await this.axios.get<UserResponse>(
      `https://api.github.com/user`,
      {
        headers: {
          Authorization: 'token ' + accessToken,
        },
      },
    );

    return response.data;
  }

  async saveGithubUser(githubUser: UserResponse) {
    return this.accountRepository.registerAccount({
      userId: githubUser.id + '',
      username: githubUser.name || githubUser.login || '',
      profilePicture: githubUser.avatar_url,
      OAuthProvider: OAuthProvider.GITHUB,
    });
  }

  async loginWithGithub(code: string) {
    const accessTokenResponse = await this.githubAccessToken(code);
    const userResponse = await this.githubUser(
      accessTokenResponse.access_token,
    );
    let account = await this.accountRepository.getAccount(
      OAuthProvider.GITHUB,
      userResponse.id + '',
    );
    if (!account) {
      account = await this.saveGithubUser(userResponse);
    }
    const payload: GithubAuthPayload = {
      OAuthProvider: OAuthProvider.GITHUB,
      accessToken: accessTokenResponse.access_token,
      tokenType: accessTokenResponse.token_type,
      uid: account.id,
    };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      access_token,
    };
  }

  async registerWithGithub(code: string) {
    const accessTokenResponse = await this.githubAccessToken(code);
    const userResponse = await this.githubUser(
      accessTokenResponse.access_token,
    );
    const account = await this.saveGithubUser(userResponse);
    const payload = {
      OAuthProvider: OAuthProvider.GITHUB,
      accessToken: accessTokenResponse.access_token,
      uId: account.id,
    };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      access_token,
    };
  }
}