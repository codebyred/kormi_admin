"use server"

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'


export const getWorkerList = async()=>{

    try{
        const res = await fetch("http://localhost:3020/api/worker",
            {
                method: "GET",
                headers:{
                    "Content-type":"application/json"
                }
            }
        );
        return res.json();
    }catch(e){
        return [];
    }

}

export const getUserList = async()=>{
    try{
        const res = await fetch("http://localhost:3020/api/user",
            {
                method: "GET",
                headers:{
                    "Content-type":"application/json"
                }
            }
        );
        return res.json();
    }catch(e){
        return [];
    }
}

export const addWorker = async(formData: string)=>{

    try{
        const res = await fetch("http://localhost:3020/api/worker",
            {
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:formData
            }
        );

        if(!res.ok) throw new Error("no response from server");

    }catch(e){
        redirect("/dashboard/workers/add");
    }
    
    revalidatePath("/dashboard/workers");
    redirect("/dashboard/workers");
}

export const updateWorker = async(formData: string)=>{

    try{
        const res = await fetch(`http://localhost:3020/api/worker/${JSON.parse(formData).id}`,
            {
                method: "PATCH",
                headers:{
                    "Content-type":"application/json"
                },
                body:formData
            }
        );

        if(!res.ok) throw new Error("no response from server");

    }catch(e){
        redirect("/fail");
    }
    
    revalidatePath("/dashboard/workers");
    redirect("/dashboard/workers");
}

export const deleteWorker = async(formData:FormData)=>{
    
    try{
        const res = await fetch(`http://localhost:3020/api/worker/${formData.get('id')}`,
            {
                method: "DELETE"
            }
        );

        if(!res.ok) throw new Error("no response from server");

    }catch(e){
        redirect("/fail");
    }
    
    revalidatePath("/dashboard/workers");
    redirect("/dashboard/workers");
}