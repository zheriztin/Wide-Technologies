'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kelas.belongsTo(models.Mahasiswa)
      Kelas.belongsTo(models.DosenPengajar)
    }
  }
  Kelas.init({
    MahasiswaId: DataTypes.INTEGER,
    DosenPengajarId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kelas',
  });
  return Kelas;
};