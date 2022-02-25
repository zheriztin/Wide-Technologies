
const errorHandler = (err, req,res,next) => {
  if(err.name === 'nimRegister'){
    res.status(400).json({message: "Nim already use"})
  } else if(err.name === 'MahasiswaNotFound'){
    res.status(404).json({message: "Mahasiswa not found"})
  } else if(err.name === 'NimAlreadyUse'){
    res.status(404).json({message: "Nim already use"})
  } else if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({message : err.errors.map((el) => el.message)})
  } else {
    res.status(500).json({message: "Internal server error"})
  }
}

module.exports = errorHandler