// index.js
const sequelize = require('./config');
const User = require('./models/User');

async function setupDatabase() {
  try {
    await sequelize.sync({ force: true }); // Set force to true to drop tables and recreate them

    // Example: Create a user
    const newUser = await User.create({ username: 'john_doe', email: 'john@example.com' });
    console.log('User created:', newUser.toJSON());
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
}

// Run the setup function
setupDatabase();
