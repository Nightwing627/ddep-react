import axios from "axios"

const instance = axios.create({
  baseURL: 'https://ddep-phase2.a4apple.cn:63303'
})

// if (localStorage.getItem("userData")) {
  const item = JSON.parse(localStorage.getItem("userData"))
  // instance.defaults.headers.common['Access-Control-Allow-Origin'] = `*`
  // instance.defaults.headers.common['Content-Type'] = `multipart/form-data`
  // instance.defaults.headers.common["Authorization"] = `Bearer ${item.token}`
  instance.interceptors.response.use(
    (config) => {
      return config
    },
    (error) => {
      if (error && error.response) {
        if (error?.response?.status === 401) {
          if (
            error?.response?.data &&
            error?.response?.data?.msgType === "Unauthorized" &&
            error?.response?.data?.shortMsg ===
              "Your login information has expired, please login again"
          ) {
            delete axios.defaults.headers.common["Authorization"]
            // ** Remove user from localStorage
            localStorage.removeItem("userData")
            localStorage.removeItem("menuCollapsed")
            window.location.reload()
            // window.location.href === "/login"
          }
        }
      }
      return Promise.reject(error)
    }
  )
// }

export default instance
