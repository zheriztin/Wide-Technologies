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
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {msg : "Name can't be empty!"},
        notNull : {msg : "Name can't be empty!"}
      }
    },
    nim: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {msg : "Nim can't be empty!"},
        notNull : {msg : "Nim can't be empty!"}
      }
    },
    alamat: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {msg : "Alamat can't be empty!"},
        notNull : {msg : "Alamat can't be empty!"}
      }
    },
    jurusan:{
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {msg : "Jurusan can't be empty!"},
        notNull : {msg : "Jurusan can't be empty!"}
      }
    },
    angkatan: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : {msg : "Angkatan can't be empty!"},
        notNull : {msg : "Angkatan can't be empty!"}
      }
    },
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};