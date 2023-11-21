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

export const pis_list_func = (allCompitance: any, pi_list: any) => {
  const all_pis_id = [];
  const all_compitance_id = [];
  for (const x in allCompitance) {
    allCompitance[x].pis.map((d) => {

      if (pi_list && pi_list?.length > 0) {
        const found = pi_list.find((pi_list_d) => pi_list_d.pi_uid == d.uid)
        if (found) {
          all_compitance_id.push(allCompitance[x].uid)
          all_pis_id.push(d.uid)
        }
      } else {
        all_compitance_id.push(allCompitance[x].uid)
        all_pis_id.push(d.uid)
      }

    });
  }

  localStorage.setItem("show_compitance_id", JSON.stringify(all_compitance_id))
  localStorage.setItem("show_all_pis_id", JSON.stringify(all_pis_id))
};


export const add_pi_uid = (all_bis: any, all_submited_PI_: any) => {
  for (let x = 0; x < all_bis.length; x++) {
    const weight = all_bis[x].weights;

    for (let y = 0; y < weight.length; y++) {
      const weight_el = weight[y];
      if (all_submited_PI_.bi_uid == weight_el.bi_uid && all_submited_PI_.weight_uid == weight_el.weight_uid) {
        return weight_el.uid
        break
      }
    }

  }
};



export const show_compitance = (compitance_uid: any) => {
  const all_compitance_id = JSON.parse(localStorage.getItem("show_compitance_id"))

  return all_compitance_id.includes(compitance_uid)

};

export const show_pis = (compitance_uid: any) => {
  const all_compitance_id = JSON.parse(localStorage.getItem("show_all_pis_id"))

  return all_compitance_id.includes(compitance_uid)

};

export const show_comment_box_bi = ( w_d :any, submitData :any ) => {
 
  console.log(`w_d`, w_d , submitData );
  return ""

};

