import React from 'react'
import {useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import './home.css'
import {Link} from "react-router-dom"
import {fetchData, deleteData} from "../store/actionCreator"
import Swal from "sweetalert2"
import {Navbar} from "../components/Navbar"

export const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)
  
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  
  const deleteMahasiswa= async(id) => {
    await dispatch(deleteData(id))
  }

  return (
    <div className="wrapper">
      <Navbar/>
      <div className="clear"></div>
        <div className="content">
          <div className="in author">
            <h2>Data Mahasiswa</h2>
          </div>
        <table>
          <thead>
            <tr className ="Judul">
              <td>No</td>
              <td>NIM</td>
              <td>Name</td>
              <td>Alamat</td>
              <td>Jurusan</td>
              <td>Angkatan</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
              {data?.map((mahasiswa, index) => {
                return (
                  <tbody key={index}>
                <tr >
                <td>{index+1}</td>
                <td>{mahasiswa.name}</td>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.alamat}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>{mahasiswa.angkatan}</td>
                <td><Link to={`/edit/${mahasiswa.id}`}>Edit</Link></td>            
                <td onClick={() => deleteMahasiswa(mahasiswa.id)} style={{cursor: "pointer"}}>Delete</td>
                </tr>
          </tbody>
                )
              })}
              
        </table>
      </div>
    </div>
  )
}
