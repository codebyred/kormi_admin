"use client"

import { updateWorker } from "../../actions";
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

export default function Add({params}:{params:{
    id:string
}}){

    const form = useForm<z.infer<typeof WorkerFormSchema>>({
        resolver:zodResolver(WorkerFormSchema),
        defaultValues:{
            id: Number(params.id),
            firstName:"",
            lastName:"",
            location:"",
            job:"",
            charge:""
        }
    });

    async function onsubmit(formData: z.infer<typeof WorkerFormSchema>){
        await updateWorker(JSON.stringify(formData));
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