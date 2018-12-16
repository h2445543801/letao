import axios from 'axios'

const baseURL ='http://127.0.0.1:3000'

axios.defaults.baseURL = baseURL

// axios的访问请求默认是不带cookie的，因此想要带cookie的请求，需要设置一个参数
axios.defaults.withCredentials = true

// 登录请求
export const Login = (params) => {
    return axios.post('/employee/employeeLogin',params)
    .then((result) => {
        return result.data
    })
}

// 用户管理
export const UserList = (params) => {
    return axios.get('/user/queryUser',params)
    .then((result) => {
        return result.data
    })
}

// 用户管理
export const UserStatus = (params) => {
    return axios.post('/user/updateUser',params)
    .then((result) => {
        return result.data
    })
}