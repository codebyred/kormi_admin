"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"

import { WorkerFormSchema} from "@/lib/schemas"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

type Props = {
    id: number,
    firstName: string,
    lastName: string,
    location: string,
    job: string,
    charge: string
}

export function UpdateForm(props: Props){

    const router = useRouter();

    const form = useForm<z.infer<typeof WorkerFormSchema>>({
        resolver:zodResolver(WorkerFormSchema),
        defaultValues:{
            id: props.id,
            firstName: props.firstName,
            lastName: props.lastName,
            location: props.location,
            job: props.job,
            charge: props.charge
        }
    });



    async function onsubmit(formData: z.infer<typeof WorkerFormSchema>){

        try{
            const apiResponse = await fetch(`http://localhost:3020/api/worker/${formData.id}`,{
                method:"PATCH",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(formData)
            });
    
            if(!apiResponse.ok){
                throw new Error("Could not update");
            }
            
            
            router.push("/dashboard/workers");

        }catch(e){
            router.refresh();
        }
   
    }

    return (
        <div className="flex min-h-screen flex-col p-8 border-2 border-red-600">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onsubmit)} className="w-fit space-y-8">
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>FirstName</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>LastName</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="job"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>JobTitle</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="charge"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ServiceCharge</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}