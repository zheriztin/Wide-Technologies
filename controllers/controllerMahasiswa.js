const {Mahasiswa} = require("../models")

module.exports= class controller {
  static showMahasiswa = async(req,res,next) => {
    try {
      const result = await Mahasiswa.findAll()
      res.status(200).json(result)
    } catch(err) {
      next(err)
    }
  }

  static showMahasiswaById = async(req,res,next) => {
    try {
      const {id} = req.params
      const result = await Mahasiswa.findByPk(id)
      res.status(200).json(result)
    } catch(err) {
      next(err)
    }
  }

  static createMahasiswa = async(req,res,next) => {
    try {
      const {name, nim, alamat, jurusan, angkatan} = req.body
      const input = {name, nim, alamat, jurusan, angkatan}
      const nimIsExist = await Mahasiswa.findOne({
        where: {
          nim: input.nim
        }
      })
      if (nimIsExist) {
        throw {name: "nimRegister"}
      }
      const result= await Mahasiswa.create(input) 
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }

  static updateMahasiswa = async(req,res,next) => {
    try {
      const {id} = req.params
      const {name, alamat, nim,  jurusan, angkatan} = req.body
      const input = {name, nim, alamat, jurusan, angkatan}
      const find = await Mahasiswa.findByPk(id)
      if (!find) {
        throw {name: "MahasiswaNotFound"}
      } 
      const findNim = await Mahasiswa.findOne({
        where: {nim: input.nim}
      })
      if (!findNim) {
        throw {name: "NimAlreadyUse"}
      } 
      const result = await Mahasiswa.update(input, {where: {id}, returning: true})
      res.status(200).json(result)
    } catch(err) {
      next(err)
    }
  }

  static deleteMahasiswa = async(req,res,next) => {
    try{
      const {id} = req.params
      const find = await Mahasiswa.findByPk(id)
      if (!find) {
        throw {name: "MahasiswaNotFound"}
      } 
      const result = await Mahasiswa.destroy({where: {id}})
      res.status(200).json({message: "Mahasiswa is Deleted"})
    } catch(err) {
      next(err)
    }
  }
}