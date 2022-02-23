'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DosenPengajar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DosenPengajar.belongsTo(models.Dosen)
      DosenPengajar.belongsTo(models.MataKuliah)
      DosenPengajar.hasMany(models.Kelas)

    }
  }
  DosenPengajar.init({
    DosenId: DataTypes.INTEGER,
    MataKuliahId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DosenPengajar',
  });
  return DosenPengajar;
};