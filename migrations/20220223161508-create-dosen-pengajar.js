'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DosenPengajars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DosenId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dosens',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      MataKuliahId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MataKuliahs',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DosenPengajars');
  }
};