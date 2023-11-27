import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const EVULATION_API = import.meta.env.VITE_REACT_APP_PI_EVULATION_API_URL;

const authToken = localStorage.getItem("customer_login_auth") || "";

const token: any = authToken ? JSON.parse(authToken) : "";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${token?.access_token}`;

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

export function all_teachers(data: any = "") {
  const page_list = `${API_URL}/v1/teacher-dashboard`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function assessments() {
  const page_list = `${API_URL}/v1/assessments`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function all_class(data: any = "") {
  const page_list = `${API_URL}/v1/classes`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function Pi_save(data: any) {
  const page_list = `${EVULATION_API}/pi-evaluation`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data,
    url: page_list,
  };

  return axios(options);
}



export function Bi_save(data: any) {
  const page_list = `${EVULATION_API}/bi-evaluation`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data,
    url: page_list,
  };

  return axios(options);
}


export function clssWiseSubject(data: any) {
  const page_list = `${API_URL}/v1/class-wise-subjects?class_id=${data}`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function teacher_own_subject() {
  const page_list = `${API_URL}/v1/own-subjects`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function teacher_dashboard() {
  const page_list = `${API_URL}/v1/teacher-dashboard`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function all_student() {
  const page_list = `${API_URL}/v1/students`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function update_teacher_profile(caid: any, data: any) {
  const page_list = `${API_URL}/v1/account-update/${caid}`;

  const options = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function get_pi_evaluation_by_pi(class_room_uid:any , pi_uid:any , evaluate_type:any) {
  const page_list = `${EVULATION_API}/get-pi-evaluation-by-pi?class_room_uid=${class_room_uid}&pi_uid=${pi_uid}&evaluate_type=${evaluate_type}`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}


export function get_bi_evaluation_by_bi(class_room_uid:any , evaluate_type:any , student_uid:any) {
  const page_list = `${EVULATION_API}/get-bi-evaluation-by-bi?class_room_uid=${class_room_uid}&evaluate_type=${evaluate_type}&student_uid=${student_uid}`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}


export function get_pi_bi_evaluation_list( submit_status:any = "") {
  const page_list = `${API_URL}/v1/pi-bi-evaluation-list?submit_status=`+submit_status;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

