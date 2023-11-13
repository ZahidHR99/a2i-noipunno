

export const weightId = (allWeight: any, id: any) => {
    let name
    allWeight.map((al_d: any) => {
        if (al_d.uid == id) {
            name = al_d.name
        }
    })
    return name
}


export const shift_name = (shifts_id: any) => {
    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const shift = storageData.data.shifts.find(shifts => shifts.uid == shifts_id)
        return shift?.shift_name
    }

}

export const branch_name = (branch_id: any) => {
    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const branch = storageData.data.branches.find(branches => branches.uid == branch_id)
        return branch?.branch_name
    }

}


export const section_name = (id: any) => {

    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const section = storageData.data.sections.find(data => data.uid == id)
        return section?.section_name
    }

}

export const teacher_name = (id: any) => {

    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const teacher = storageData.data.teachers.find(data => data.uid == id)
        return teacher?.name_en
    }

}


export const teacher_subject = (id: any) => {

    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const shift = storageData.data.subjects.find(data => data.uid == id)
        return shift?.assigned_subjects
    }

}

export const check_pi = (id: any) => {

    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const shift = storageData.data.teachers.find(data => data.uid == id)
        return shift?.name_en
    }

}