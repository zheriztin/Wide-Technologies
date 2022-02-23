'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dosen.hasMany(models.DosenPengajar)
    }
  }
  Dosen.init({
    name: DataTypes.STRING,
    nid: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dosen',
  });
  return Dosen;
};