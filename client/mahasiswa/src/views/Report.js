import React from 'react'
import {Navbar} from "../components/Navbar"
import {useEffect , useState }from "react"
import {useDispatch, useSelector} from "react-redux"
import { fetchLaporanPerDosen, fetchLaporanPerMatakuliah} from '../store/actionCreator'


export const Report = () => {
  const dispatch = useDispatch()
  const databyDosen = useSelector(state => state.laporanByDosen)
  console.log(databyDosen,".>");
  const data = useSelector(state => state.laporanByMatakuliah)
  const [laporanPerMatakuliah, setLaporanPerMatakuliah] = useState([])
  const [selectedTab, setSelectedTab] = useState({
    'LaporanMahasiswaPerDosen': true,
    'laporanPerMatakuliah': false,
  })

  useEffect(()=> {
    dispatch(fetchLaporanPerDosen())
  },[])

  const fetchMahasiswaPerMatakuliah = async() => {
    const data = await dispatch (fetchLaporanPerMatakuliah())
    setLaporanPerMatakuliah(data)
  }

  const changeTab = (tab) => {
    if (tab === 'laporanPerMatakuliah') {
      fetchMahasiswaPerMatakuliah()
    } 


  const newTab = {}

  for (const key in selectedTab) {
    if (key !== tab) {
      newTab[key] = false
    } else {
      newTab[key] = true
    }
  }
  setSelectedTab(newTab)
}

  return (
    <div className="wrapper">
    <Navbar/>
    <div className="clear"></div>
      <div className="content">
        <div className="in author">
          <h2>Laporan Mahasiswa</h2>
        </div>
        <div style={{display: 'flex', justifyContent:'center'}}>
          <div style={{margin:'2em', borderBottom: selectedTab['LaporanMahasiswaPerDosen'] && '5px solid red', padding:'0.25em', cursor:'pointer', fontWeight: 'bold'}} onClick={()=> changeTab('LaporanMahasiswaPerDosen')}>Laporan Mahasiswa Per Dosen</div>
          <div style={{margin:'2em', borderBottom: selectedTab['laporanPerMatakuliah'] && '5px solid red', padding:'0.25em', cursor:'pointer' ,fontWeight: 'bold'}} onClick={()=> changeTab('laporanPerMatakuliah')}>Laporan Mahasiswa per Matakuliah</div>
        </div>
      {
        selectedTab['LaporanMahasiswaPerDosen'] && (
          <div name="LaporanMahasiswaPerDosen" style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
          <table>
            <thead>
              <tr className ="laporanByLecture">
                <td>No</td>
                <td>Nama Dosen</td>
                <td>Nama Matakuliah</td>
                <td>Nama Mahasiswa</td>
              </tr>
            </thead>
            {databyDosen?.map((laporan, index) => {
              return (
                <tbody key={index}>
                  <tr >
                  <td>{index+1}</td>
                  <td>{laporan.d_name}</td>
                  <td>{laporan.m_name}</td>
                  <td>{laporan.mahasiswa}</td>
                  </tr>
                </tbody>
              )
            })}
          </table>
          </div>
        )
      }
      {
        selectedTab['laporanPerMatakuliah'] && (
          <div name="laporanPerMatakuliah" style={{display:'flex', flexWrap:'nowrap', alignItems:'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div className="col-auto align-items-right">
              <input type="text" class="form-control"  placeholder="Search by year"/>
            </div>
            <div>
          <table>
            <thead>
              <tr className ="laporanBySubject">
                <td>No</td>
                <td>Nama Dosen</td>
                <td>Nama Matakuliah</td>
                <td>Nama Mahasiswa</td>
                <td>Angkatan</td>
              </tr>
            </thead>
            {data?.map((laporan, index) => {
              return (
                <tbody key={index}>
                  <tr >
                  <td>{index+1}</td>
                  <td>{laporan.d_name}</td>
                  <td>{laporan.m_name}</td>
                  <td>{laporan.mahasiswa}</td>
                  <td>{laporan.angkatan}</td>

                  </tr>
                </tbody>
              )
            })}
          </table>

            </div>
          </div>
        )
      }
    </div>
  </div>

  )
}
