export const weightId = (allWeight: any, id: any) => {
  let name;
  allWeight.map((al_d: any) => {
    if (al_d.uid == id) {
      name = al_d.name;
    }
  });
  return name;
};

export const shift_name = (shifts_id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const shift = storageData.data.shifts.find(
      (shifts) => shifts.uid == shifts_id
    );
    return shift?.shift_name;
  }
};

export const branch_name = (branch_id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const branch = storageData.data.branches.find(
      (branches) => branches.uid == branch_id
    );
    return branch?.branch_name;
  }
};

export const section_name = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const section = storageData.data.sections.find((data) => data.uid == id);
    return section?.section_name;
  }
};

export const teacher_name = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const teacher = storageData.data.teachers.find((data) => data.uid == id);
    return teacher?.name_en;
  }
};

export const teacher_subject = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const shift = storageData.data.subjects.find((data) => data.uid == id);
    return shift?.assigned_subjects;
  }
};

export const version_name = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const version = storageData.data.versions.find((data) => data.uid == id);
    return version?.version_name;
  }
};

export const subject_name = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const subject = storageData.data.subjects.find((data) => data.uid == id);
    return subject?.name;
  }
};

export const pis_list_func = (
  allCompitance: any,
  pi_list: any,
  pi_selection: any = ""
) => {
  const all_pis_id = [];
  const all_compitance_id = [];
  localStorage.setItem("show_shannasik_barsik", "false");

  for (const x in allCompitance) {
    allCompitance[x].pis.map((d) => {
      if (pi_list && pi_list?.length > 0) {
        const found = pi_list.find((pi_list_d) => pi_list_d.pi_uid == d.uid);
        if (found) {
          localStorage.setItem("show_shannasik_barsik", "true");
          all_compitance_id.push(allCompitance[x].uid);
          all_pis_id.push(d.uid);
        }
      } else {
        all_compitance_id.push(allCompitance[x].uid);
        all_pis_id.push(d.uid);
      }
    });
  }

  localStorage.setItem("show_compitance_id", JSON.stringify(all_compitance_id));
  localStorage.setItem("show_all_pis_id", JSON.stringify(all_pis_id));
};

export const add_pi_uid = (all_bis: any, all_submited_PI_: any) => {
  for (let x = 0; x < all_bis.length; x++) {
    const weight = all_bis[x].weights;

    for (let y = 0; y < weight.length; y++) {
      const weight_el = weight[y];
      if (
        all_submited_PI_.bi_uid == weight_el.bi_uid &&
        all_submited_PI_.weight_uid == weight_el.weight_uid
      ) {
        return weight_el.uid;
        break;
      }
    }
  }
};

export const show_compitance = (compitance_uid: any) => {
  const all_compitance_id = JSON.parse(
    localStorage.getItem("show_compitance_id")
  );

  return all_compitance_id.includes(compitance_uid);
};

export const show_pis = (compitance_uid: any) => {
  const all_compitance_id = JSON.parse(localStorage.getItem("show_all_pis_id"));

  return all_compitance_id.includes(compitance_uid);
};

export const show_shannasik_barsik = () => {
  const show_shannasik_barsik__ = JSON.parse(
    localStorage.getItem("show_shannasik_barsik")
  );
  console.log(`show_shannasik_barsik__`, show_shannasik_barsik__);
  return show_shannasik_barsik__;
};

export const show_comment_box_bi = (
  w_d: any,
  submitData: any,
  student_uid: any
) => {
  let obj = submitData.filter(
    (d: any) => d.bi_uid == w_d.bi_uid && student_uid == d.student_uid
  );
  if (obj.length) {
    return "Remark : " + obj[0].remark;
  }
  return "";
};

export const show_comment_box_Pi = (
  w_d: any,
  submitData: any,
  student_uid: any
) => {
  let obj = submitData.filter(
    (d: any) => d.pi_uid == w_d.pi_uid && student_uid == d.student_uid
  );
  if (obj.length) {
    return "Remark : " + obj[0].remark;
  }
  return "";
};

export function check_pi_submitted(pis_id: any, assessment_uid: any) {
  const pi_bi_evaluation_list = JSON.parse(
    localStorage.getItem("pi_bi_evaluation_list")
  );
  const class_room_id = JSON.parse(localStorage.getItem("class_room_id"));

  const pi_list = pi_bi_evaluation_list?.pi_evaluation_list || [];

  for (let index = 0; index < pi_list.length; index++) {
    const pi_d = pi_list[index];

    if (
      pi_d.evaluate_type == assessment_uid &&
      pis_id.uid == pi_d.pi_uid &&
      pi_d.class_room_uid == class_room_id
    ) {
      return true;
      break;
    }
  }
}

export const convertToBanglaNumber = (number:any) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯','১০',','];
  const numString = number.toString();
  let banglaNumber = '';
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== ",") {
      const digit =  parseInt(numString[i]);
    banglaNumber += banglaDigits[digit];
    }else{
      banglaNumber += ","
    }
  }
  return banglaNumber;
}



// Retrieve the students array from the data in local storage
const studentsArray = localStorage?.getItem?.data?.students || [];

// Get the number of students (length of the students array)
export const numberOfStudents = studentsArray.length;

console.log("Number of students:", numberOfStudents);
