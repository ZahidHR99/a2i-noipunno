import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export function loginPassword(data: any) {
    const page_list = `${API_URL}/v1/login`;

    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data,
        url: page_list,
    };

    return axios(options);
}

export function all_teachers(data: any) {
    const page_list = `${API_URL}/v1/teachers`;

    const options = {
        method: "get",
        headers: { "content-type": "application/json" },
        data,
        url: page_list,
    };

    return axios(options);
}


export function all_class(data: any) {
    const page_list = `${API_URL}/v1/classes`;

    const options = {
        method: "get",
        headers: { "content-type": "application/json" },
        data,
        url: page_list,
    };

    return axios(options);
}
export function clssWiseData(data: any) {
    const page_list = `${API_URL}/v1/class-wise-subjects?class_id=${data}`;

    const options = {
        method: "get",
        headers: { "content-type": "application/json" },
        data,
        url: page_list,
    };

    return axios(options);
}



