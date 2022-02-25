const express = require('express')
const { createMahasiswa, updateMahasiswa, deleteMahasiswa, showMahasiswa, showMahasiswaById } = require('./controllers/controllerMahasiswa')
const { createStudentListByLecturers, createStudentListByLecturersWithSubject, createStudentListByBatch } = require('./controllers/mahasiswa')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/studentByLectures', createStudentListByLecturers )
app.get('/studentBySubjectByLectures', createStudentListByLecturersWithSubject)
app.get('/studentByLecturesbyYear', createStudentListByBatch)

app.get('/', showMahasiswa)
app.get('/:id', showMahasiswaById)
app.post('/', createMahasiswa)
app.put('/:id', updateMahasiswa)
app.delete('/:id', deleteMahasiswa)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})