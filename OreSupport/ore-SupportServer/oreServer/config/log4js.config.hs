{
  "appenders": {
    "consolelog": {
      "type": "console"
    },
    "SystemLog": {
      "type": "file",
      "filename": "./log/system.log",
      "maxLogSize": 5000000,
      "backups": 3
    },
    "HttpLog": {
      "type": "dateFile",
      "filename": "./log/http.log",
      "pattern": ".yyyy-MM-dd",
      "daysToKeep": 7
    },
    "AccessLog": {
      "type": "dateFile",
      "filename": "./log/access.log",
      "pattern": ".yyyy-MM-dd",
      "daysToKeep": 7
    }
  },
  "categories": {
    "default": {
      "appenders": ["ConsoleLog"],
      "level": "all"
    },
    "system": {
      "appenders": ["SystemLog"],
      "level": "info"
    },
    "http": {
      "appenders": ["HttpLog"],
      "level": "info"
    },
    "access": {
      "appenders": ["AccessLog"],
      "level": "info"
    }
  }
}