export default {
  mongoUrl:
    process.env.MONGO_URL ||
    'mongodb+srv://api:camundongosaventureiros@cluster0.gixx7.mongodb.net/pedb',
  port: process.env.PORT || 5050,
};
