import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '85b22a2554b848919e4c9195fbd7701d',
    },
})