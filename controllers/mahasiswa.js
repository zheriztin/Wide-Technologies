
const {Mahasiswa, Dosen, MataKuliah, DosenPengajar, Kelas, sequelize} = require("../models")
const {QueryTypes} = require('sequelize')

module.exports = class Controller {

  // static mahasiswaByDosen = async (req,res,next) =>{
  //   try{
  //     console.log(req.params);
  //     const {DosenId}= req.params
  //     const result = await Dosen.findAll ({
  //       include: [
  //         {
  //           model: DosenPengajar, 
  //           where: {DosenId},
  //           include:[
  //             {
  //             model: Kelas,
  //             include: [
  //               {
  //                 model: Mahasiswa
  //               }
  //             ]
  //             }
  //           ]
  //         },
  //       ],
  //     })
  //     res.status(200).json(result)
  //   } catch(err){
  //     next(err)
  //   }
  // }

  static createStudentListByLecturers = async (req,res,next) => {
    try {
      const query = `
      select  d."name" as "d_name", array_to_string(array_agg(m."name"),',') as "mahasiswa" from "Dosens" d
      left join "DosenPengajars" dp
      on d."id" = dp."DosenId"
      left join "Kelas" k
      on dp."id" = k."DosenPengajarId"
      left join "Mahasiswas" m
      on k."MahasiswaId" =  m."id"
      group by  "d_name"
      `
      const response = await sequelize.query(query,{ type: sequelize.QueryTypes.SELECT })
      res.status(200).json(response)

    } catch (error) {
      res.json({message: error.message, status: error.status})
      console.log(error);
    }
  }

  static createStudentListByLecturersWithSubject = async (req,res,next) => {
    try {
      const query = `
      select  d."name" as "d_name", "MataKuliahs"."name" as "m_name", array_to_string(array_agg(m."name"),',') as "mahasiswa" from "Dosens" d
      left join "DosenPengajars" dp
      on d."id" = dp."DosenId"
      left join "Kelas" k
      on dp."id" = k."DosenPengajarId"
      left join "Mahasiswas" m
      on k."MahasiswaId" =  m."id"
      left join "MataKuliahs" 
      on "MataKuliahs"."id" = dp."MataKuliahId"
      group by  "d_name", "m_name"
      `
      const response = await sequelize.query(query,{ type: sequelize.QueryTypes.SELECT })
      res.status(200).json(response)

    } catch (error) {
      res.json({message: error.message, status: error.status})
      console.log(error);
    }
  }

  static createStudentListByBatch = async (req,res,next) => {
    try {
      let {angkatan} = req.query
      const query = `
      select  d."name" as "d_name", "MataKuliahs"."name" as "m_name", m."angkatan" as "angkatan", array_to_string(array_agg(m."name"),',') as "mahasiswa" from "Dosens" d
      left join "DosenPengajars" dp
      on d."id" = dp."DosenId"
      left join "Kelas" k
      on dp."id" = k."DosenPengajarId"
      left join "Mahasiswas" m
      on k."MahasiswaId" =  m."id"
      left join "MataKuliahs" 
      on "MataKuliahs"."id" = dp."MataKuliahId"
      WHERE "angkatan" = CASE WHEN ${angkatan} IS NULL THEN "angkatan" ELSE ${angkatan} end
      group by  "d_name", "m_name", "angkatan"
      `
      const response = await sequelize.query(query,{ type: sequelize.QueryTypes.SELECT })
      res.status(200).json(response)

    } catch (error) {
      res.json({message: error.message, status: error.status})
      console.log(error);
    }
  }
}


