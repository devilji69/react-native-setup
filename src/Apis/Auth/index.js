import * as API from '../Request';
// import { useTheme } from 'react-native-paper';

// const { ApiList } = useTheme();
// console.log(ApiList);
export const getUserList = async (url) => {
    let postheader = {
        "Content-type": "application/json"
    }
    return await API.getAPI(url,postheader);
}
// const getUserLogin = async (url,data) => {
//     let postheader = {
//         "Content-type": "application/json"
//     }
//     return await API.postAPI(url,postheader,data);
// }

// const getUserLogin = async (url, token) => {
//     let postheader = {
//         "Content-type": "application/json",
//         "Authorization": "Bearer "+token
//     }
//     return await API.getAPI(url, postheader);
// }