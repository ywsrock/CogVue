const config = {
  "appenders": {
    "access": {
      "type": "dateFile",
      "filename": "log/access.log",
      "pattern": "-yyyy-MM-dd",
      "category": "http",
      "numBackups": 30
    },
    "app": {
      "type": "file",
      "filename": "log/app.log",
      "maxLogSize": 10485760,
      "numBackups": 3
    },
    "errorFile": {
      "type": "file",
      "filename": "log/errors.log"
    },
    "errors": {
      "type": "logLevelFilter",
      "level": "ERROR",
      "appender": "errorFile"
    }
  },
  "categories": {
    "default": { "appenders": ["app", "errors"], "level": "info" },
    "http": { "appenders": ["access"], "level": "info" }
  }
}

module.exports = config;