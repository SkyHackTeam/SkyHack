module.exports = {
  port: 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb://localhost:27017/reddit',
    test: 'mongodb://localhost:27017/reddit_test',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      // reconnectTries: Number.MAX_VALUE,
      // reconnectInterval: 500,
      useUnifiedTopology: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
