import {errors} from "../../constants";
import {AppException} from "./app-exception";

export class BotTypeNotSupportedException extends AppException {
  constructor() {
    super(errors.ERR_001.message);
    this.code = errors.ERR_001.code;
    this.source = 'server';
    this.name = 'BotTypeNotSupportedException';
  }
}

export class BotNotBoundException extends AppException {
  constructor() {
    super(errors.ERR_002.message);
    this.code = errors.ERR_002.code;
    this.source = 'user';
    this.name = 'BotNotBoundException';
  }
}

export class KeyNotSetException extends AppException {
  constructor(key: string) {
    super(`${key} is not set, please set it in your account settings`);
    this.message = `${key} is not set, please set it in your account settings`;
    this.code = errors.ERR_003.code;
    this.source = 'user';
    this.name = 'KeyNotSetException';
  }
}

export clas