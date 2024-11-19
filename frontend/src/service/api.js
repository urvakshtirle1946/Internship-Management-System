import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getAllInterns = async () => {
  return axios.get(`${API_BASE_URL}/admin/interns`);
};

export const assignMentor = async (data) => {
  return axios.post(`${API_BASE_URL}/admin/assign-mentor`, data);
};

export const submitReport = async (studentId, reportData) => {
  return axios.post(`${API_BASE_URL}/students/${studentId}/report`, reportData);
};
