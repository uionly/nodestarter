import axios from "axios";

const baseUrl = "http://localhost:5000";

export function fetchDetail() {
  return axios.get(`${baseUrl}/items`).catch(function(error) {
    console.log(error);
  });
}

export function postDetail(data) {
  return axios.post(`${baseUrl}/item`, data).catch(function(error) {
    console.log(error);
  });
}

export function updateDetail(id, data) {
  return axios.patch(`${baseUrl}/item/${id}`, data).catch(function(error) {
    console.log(error);
  });
}

export function deleteDetail(id) {
  return axios.delete(`${baseUrl}/item/${id}`).catch(function(error) {
    console.log(error);
  });
}
