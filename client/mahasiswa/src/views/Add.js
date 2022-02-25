import React, {useState, useEffect} from 'react'
import { Navbar } from '../components/Navbar'
import  {useHistory} from "react-router-dom"
import {addMahasiswaData} from "../store/actionCreator"
import {useDispatch, useSelector} from 'react-redux'

export const Add = () => {
  const [inputData, setInputData] = useState ({
    name: "",
    nim: "",
    alamat: "",
    jurusan: "",
    angkatan: ""
  })
  
  const dispatch = useDispatch()
  const history = useHistory()

  const addMahasiswa= async(e) => {
    e.preventDefault()
    await dispatch(addMahasiswaData(inputData))
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
            <h2>Add Mahasiswa</h2>
            <form onSubmit={addMahasiswa}>
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
