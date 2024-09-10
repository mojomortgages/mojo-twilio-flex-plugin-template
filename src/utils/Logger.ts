import { PLUGIN_NAME } from "../Plugin";

export enum LogLevel {
  DEBUG,
  LOG,
  INFO,
  WARN,
  ERROR,
}

export class Logger {
  private static instance: Logger;
  private logLevel: LogLevel = this.setInitialLogLevel();

  private constructor() {}

  private setInitialLogLevel() {
    if (window.location.hostname.includes("flex.twilio.com")) {
      return LogLevel.INFO;
    } else {
      return LogLevel.DEBUG;
    }
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.logLevel;
  }

  private formatMessage(level: string): string {
    return `[${PLUGIN_NAME}] [${level}]`;
  }

  debug(message: Parameters<typeof console.log>[0], ...args: any[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log(this.formatMessage("DEBUG"), message, ...args);
    }
  }

  log(message: Parameters<typeof console.log>[0], ...args: any[]): void {
    if (this.shouldLog(LogLevel.LOG)) {
      console.log(this.formatMessage("LOG"), message, ...args);
    }
  }

  info(message: Parameters<typeof console.log>[0], ...args: any[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage("INFO"), message, ...args);
    }
  }

  warn(message: Parameters<typeof console.log>[0], ...args: any[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage("WARN"), message, ...args);
    }
  }

  error(message: Parameters<typeof console.log>[0], ...args: any[]): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error(this.formatMessage("ERROR"), message, ...args);
    }
  }
}
