import React, {useState, useEffect} from 'react'
import { Navbar } from '../components/Navbar'
import  {useHistory, useParams} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { editMahasiswaData, fetchDataById } from '../store/actionCreator'

export const Edit = () => {
  const [inputData, setInputData] = useState ({
    name: "",
    nim: "",
    alamat: "",
    jurusan: "",
    angkatan: ""
  })

  const {id} = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect( async() => {
    const {name, nim, alamat, jurusan, angkatan} = await dispatch(fetchDataById(id))
    const fetchData = {
      name,
      nim,
      alamat,
      jurusan,
      angkatan
    }
    await setInputData(fetchData)
  }, [])

  const editMahasiswa= async(e) => {
    e.preventDefault()
    await dispatch(editMahasiswaData(id, inputData))
    history.push('/')
  }

  const handleChange = ({target:{value, name}}) => {
    setInputData ({
      ...inputData,
      [name]:value
    })
  }

  return (
    <div className="wrapper">
    <Navbar/>
    <div className="clear"></div>
      <div className="content">
        <div className="in author">
          <h2>Edit Mahasiswa</h2>
          <form onSubmit={editMahasiswa}>
          <div className="mb-3">
            <label className="form-label" style={{marginTop: 10}}>Name</label>
            <input type="text" className="form-control" name="name" value={inputData.name} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label">NIM</label>
            <input type="text" className="form-control" name="nim" value={inputData.nim} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{marginTop: 10}}>Alamat</label>
            <input type="text" className="form-control" name="alamat" value={inputData.alamat} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Jurusan</label>
            <input type="text" className="form-control" name="jurusan" value={inputData.jurusan} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Angkatan</label>
            <input type="text" className="form-control" name="angkatan" value={inputData.angkatan} onChange={handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
            
          </form>
        </div>
    </div>
  </div>
  )
}
