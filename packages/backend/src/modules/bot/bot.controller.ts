import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common';
import { BotService } from './bot.service';
import { CreateBotDto, UpdateBotDto } from '../../dto/bot-config/0.0.1.dto';
import { SecureRequest } from '../../types/secure-request';
import { ZodValidationPip