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

// 用户状态
export const UserStatus = (params) => {
    return axios.post('/user/updateUser',params)
    .then((result) => {
        return result.data
    })
}
//一级分类
export const classifyList = (pa) => {
    return axios.get('/category/queryTopCategoryPaging',{params:pa})
    .then((result) =>{
        return result.data
    })
}
//一级分类新增
export const classifyForm = (params) => {
    return axios.post('/category/addTopCategory',params)
    .then((result) => {
        return result.data
    })
}
//二级分类
export const ReclassifyList = (pa) => {
    return axios.get('/category/querySecondCategoryPaging',{params:pa})
    .then((result) =>{
        return result.data
    })
}
//二级分类新增
export const addClassify = (params) => {
    return axios.post('/category/addSecondCategory',params)
    .then((result) => {
        return result.data
    })
}