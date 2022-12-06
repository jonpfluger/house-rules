const sequelize = require('../config/connection');
const { User, Review, Category } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Category.bulkCreate(categoryData, {
    returning: true
  })

  for (const review of reviewData) {
    await Review.create({
      ...review,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      category_id: categories[Math.floor(Math.random() * categories.length)].id,
    })
  }

  process.exit(0);
};

seedDatabase();
