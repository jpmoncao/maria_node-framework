import { createLogger, format, transports } from 'winston';
import fs from 'fs';
import path from 'path';

const logsDirectory = 'logs';
const logsFilename = 'sequelize.log';

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new transports.File({ filename: path.join(logsDirectory, logsFilename) }),
    ],
});

export default logger;