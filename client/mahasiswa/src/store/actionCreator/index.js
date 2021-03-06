import {SET_DATA, SET_ERROR, SET_DELETE_DATA, SET_ADD_DATA, SET_LAPORAN_BY_DOSEN, SET_LAPORAN_BY_MATAKULIAH, SET_EDIT_DATA, SET_DATA_BY_ID} from "../actionType"
import axios from 'axios'
import Swal from "sweetalert2"

const baseUrl = "http://localhost:3000/"

export function setData (data) {
  return {type: SET_DATA, payload: data}
}

export function setError (payload) {
  return {type: SET_ERROR, payload}
}

export function setDelete (payload) {
  return {type: SET_DELETE_DATA, payload}
}

export function addData (payload) {
  return {type: SET_ADD_DATA, payload}
}

export function dataById (payload) {
  return {type: SET_DATA_BY_ID, payload}
}

export function editById (payload) {
  return {type: SET_EDIT_DATA, payload}
}

export function laporanByDosenId (payload) {
  return {type: SET_LAPORAN_BY_DOSEN, payload}
}

export function laporanByMatakuliahData (payload) {
  return {type: SET_LAPORAN_BY_MATAKULIAH, payload}
}

export function fetchData() {
  return async(dispatch) => {
    try{
      const response = await axios ({
        method: "GET",
        url: baseUrl,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        } 
      })
      await dispatch(setData(response.data))
    } catch(err) {
      dispatch(setError(err))
    }
  }
}

export function deleteData(id) {
  return async(dispatch) => {
    try{
      const response = await axios ({
        method: "delete",
        url: baseUrl + `${id}`,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        } 
      })
      await dispatch(fetchData(response.data))
    } catch(err) {
      dispatch(setError(err))
    }
  }
}

export function addMahasiswaData(inputData) {
  return async(dispatch) => {
    try {
      const response = await axios.post(baseUrl, inputData)
      await dispatch(fetchData(response.data))
    } catch(err) {
      dispatch(setError(err))
    }
  }
}

export function editMahasiswaData(id, inputData) {
  return async(dispatch) => {
    try {
      const response = await axios.put(baseUrl+id, inputData)
      await dispatch(fetchData(response.data))
    } catch(err) {
      dispatch(setError(err))
    }
  }
}

export function fetchDataById(id) {
  return async(dispatch) => {
    try {
      const response = await axios.get(baseUrl + id)
      return response.data
    } catch(err) {
      dispatch(setError(err))
    }
  }
}

export function fetchLaporanPerDosen() {
  return async(dispatch) => {
    try{
      console.log("masuk");
      const response = await axios (baseUrl + 'studentByLectures')
      console.log(response.data,">>>>>>");
      await dispatch(laporanByDosenId(response.data))
    } catch(err) {
      dispatch(setError(err))
    }
  }
}

export function fetchLaporanPerMatakuliah(query) {
  return async(dispatch) => {
    try{
      const newUrl= query? baseUrl + 'studentBySubjectByLectures?angkatan=' + query : baseUrl + 'studentBySubjectByLectures'
      const response = await axios (newUrl)
      await dispatch(laporanByMatakuliahData(response.data))
    } catch(err) {
      dispatch(setError(err))
    }
  }
}