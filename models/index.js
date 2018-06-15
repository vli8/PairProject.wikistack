const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/wikistack'); //db is now an instance/object of Sequelize which can interact with the database

const Page = db.define('page', {//Page is a class model
    title: Sequelize.STRING,
    slug: Sequelize.STRING,
    content: Sequelize.TEXT,
    status: Sequelize.ENUM('open','closed')
});
const User = db.define('user', {
    name: Sequelize.STRING,
    email: {
		type: Sequelize.STRING,
		validate: {
			isEmail:true
		}
    }
})


module.exports = {
	db,Page,User
};

