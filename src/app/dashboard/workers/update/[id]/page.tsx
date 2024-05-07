import { UpdateForm } from "@/components/ui/dashboard/updateForm"
import { Worker } from "@/lib/types";

const getWorkerById = async(id: number)=>{
    try{

        const apiResponse = await fetch(`http://localhost:3020/api/worker/${id}`,{
            method:"GET"
        });

        if(!apiResponse.ok){
            throw new Error("Could not fetch data");
        }

        const workers: Worker[] = await apiResponse.json();

        return workers[0];

    }catch(e){
        return {
            id: 0,
            firstName: "",
            lastName: "",
            location:"",
            job: "",
            charge:""
        }
    }
}

export default async function Update({params}:{params:{
    id:string
}}){

    const worker: Worker = await getWorkerById(Number(params.id));

    return <UpdateForm 
        id={worker.id} 
        firstName={worker.firstName} 
        lastName={worker.lastName}
        location={worker.location}
        job={worker.job}
        charge={worker.charge}
    />
    
}