'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mahasiswa.hasMany(models.Kelas)
    }
  }
  Mahasiswa.init({
    name: DataTypes.STRING,
    nim: DataTypes.STRING,
    alamat: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    angkatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};