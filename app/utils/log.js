const winston = require("winston"),
    config = require("config");

// Setup default logger
const log = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp()
    ),
    transports: [
        new winston.transports.File({
            filename: "error.log",
            format: winston.format.combine(
                winston.format.json(),
                winston.format.timestamp()
            ),
            level: "warn"
        }),
    ],
});

// Add console logging when local
if (config.get("env") === "local") {
    log.add(
        new winston.transports.Console({
            level: "debug",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.prettyPrint()
            ),
        })
    );
}

module.exports = log;
