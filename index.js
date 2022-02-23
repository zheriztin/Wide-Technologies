const express = require('express')
const { mahasiswaByDosen } = require('./controllers/mahasiswa')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/dosen/:DosenId', mahasiswaByDosen )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})