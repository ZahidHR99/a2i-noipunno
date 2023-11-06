

export const weightId = (allWeight: any, id: any) => {

    let name
    allWeight.map((al_d: any) => {
        if (al_d.uid == id) {
            name = al_d.name
        }
    })

    return name
}


export const session = (id: any) => {
    console.log("Utilities>> Teacher id", id);


    const data = localStorage.getItem("teacher_dashboard");
    const storageData = JSON.parse(data)
    if (storageData) {
        const allShifts = [...storageData.data.shifts]
        console.log("Local storage data", storageData.data);
        console.log("all-Shifts", allShifts);

        const shift = allShifts.find(shift => shift.uid === id)
        console.log("User Idwise shift =>", shift);


    }

}