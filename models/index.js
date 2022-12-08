const User = require('./User');
const Review = require('./Review')
const Category = require('./Category')

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(User, {
    foreignKey: 'user_id'
})

Category.hasMany(Review, {
    foreignKey: 'category_id'
})

Review.belongsTo(Category, {
    foreignKey: 'category_id'
})

module.exports = { User, Review, Category };
