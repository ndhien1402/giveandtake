import axios from "axios";
let auth: any = {};

// Đặt cấu hình mặc định lúc tạo ra instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_ENDPOINT_URL || "http://localhost:8000",
});

// Sửa đổi cấu hình trị mặc định sau khi tạo ra instance
api.defaults.headers.common["Authorization"] = auth?.AUTH_TOKEN || "";

// Thêm một bộ đón chặn request
api.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
api.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  }
);

export { api };
