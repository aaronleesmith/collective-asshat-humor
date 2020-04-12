import * as winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // todo: make this configurable,
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console()
  ]
})

export default logger;