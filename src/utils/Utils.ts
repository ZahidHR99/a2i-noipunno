export const weightId = (allWeight:any , id:any)=>{

    let name
    allWeight.map((al_d:any)=>{
        if (al_d.uid == id) {
            name = al_d.name
        }
    })

    return name
}