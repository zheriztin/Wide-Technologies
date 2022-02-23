'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kelas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MahasiswaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mahasiswas',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      DosenPengajarId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DosenPengajars',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('Kelas');
  }
};