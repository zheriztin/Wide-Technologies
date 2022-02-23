const {Mahasiswa, Dosen, MataKuliah, DosenPengajar, Kelas} = require("../models")

module.exports = class Controller {

  static mahasiswaByDosen = async (req,res,next) =>{
    try{
      console.log(req.params);
      const {DosenId}= req.params
      const result = await Dosen.findAll ({
        include: [
          {
            model: DosenPengajar, 
            where: {DosenId},
            include:[
              {
              model: Kelas,
              include: [
                {
                  model: Mahasiswa
                }
              ]
              }
            ]
          },
        ],
      })
      res.status(200).json(result)
    } catch(err){
      next(err)
    }
  }
}