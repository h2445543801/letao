import axios from 'axios'

const baseURL ='http://127.0.0.1:3000'

axios.defaults.baseURL = baseURL

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