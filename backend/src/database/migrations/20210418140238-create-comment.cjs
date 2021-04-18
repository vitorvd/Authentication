'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('comments', { 
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: { model: 'users', key: 'id'}, // faz referência a tabela "users" ao campo "id"
			onUpdate: 'CASCADE', // caso o campo "id" altere na tabela "users" refletirá aqui
			onDelete: 'CASCADE', // caso o User seja deletado, irá deletar os comentárions também
		},
		comment: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		created_at: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		updated_at: {
			type: Sequelize.DATE,
			allowNull: false,
		},
      });
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.dropTable('comments');
  }
};
