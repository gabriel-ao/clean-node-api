export default {
  mongoUrl:
    process.env.MONGO_URL ||
    'mongodb://gabriel:gabriel@localhost:27017/clean-node-api?authSource=clean-node-api',
  port: process.env.PORT || 5050,
};
