import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { SecureRequest } from 'src/types/secure-request';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'googleapis-common';
import { AccountRepository } from 'src/repositories/account/account.repository';
import { OAuth } from '@prisma/client';
import { InvalidRequestException } from '@my-monorepo/shared';

@Injectable({
  scope: Scope.REQUEST,
})
export class GoogleClientService extends OAuth2Client {
  private logger: Logger = new Logger(GoogleCli