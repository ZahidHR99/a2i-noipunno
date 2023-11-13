

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


export const section_name = (id: any) => {

    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const shift = storageData.data.sections.find(data => data.uid == id)
        return shift?.section_name
    }

}

export const teacher_name = (id: any) => {

    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const shift = storageData.data.teachers.find(data => data.uid == id)
        return shift?.name_en
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