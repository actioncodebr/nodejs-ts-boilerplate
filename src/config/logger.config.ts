import { createLogger, format, transports, Logger, Logform } from 'winston'

class LoggerManager {
  public logger: Logger
  public logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
  }

  public expectedFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf(this.formatString)
  )

  constructor() {
    this.logger = createLogger({
      format: this.expectedFormat,
      levels: this.logLevels,
      transports: [new transports.Console({})],
    })
  }

  private formatString(info: Logform.TransformableInfo) {
    return `${info.timestamp} ${info.level}: ${info.message}`
  }
}

export default new LoggerManager().logger
