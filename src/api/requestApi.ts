import axios from "axios";

const baseUrl =
  "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export const getMusicVideos = () => {
  return apiClient
    .get("main/data/dataset.json")
    .then((response) => response.data);
};

// Generic usage for each endPoint

// GET
// export const getRequest = (url: string) => {
//   return apiClient.get(`/${url}`).then((response) => response.data);
// }

// POST
// export const postRequest = (url: string, payload: any) => {
//   return apiClient.post(`/${url}`, payload).then((response) => response.data);
// }

// PUT
// export const putRequest = (url: string, payload: any) => {
//   return apiClient.put(`/${url}`, payload).then((response) => response.data);
// }

// DELETE
// export const removeRequest = (url: string) => {
//   return apiClient.delete(`/${url}`).then((response) => response.data);
// }
