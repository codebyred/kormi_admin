import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import { Button } from "@/components/ui/button"

import { deleteWorker, getWorkerList, goToUpdatePage } from "./actions";

import { Worker } from "@/lib/types";

import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function Workers(){

    revalidatePath("/dashboard/workers");

    const workers: Worker[] = await getWorkerList();
    return (
        <div className=" flex min-h-screen flex-col p-8">
            <span className="">Workers</span>
            <div className="border-2 rounded border-gray-300">

                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>WorkerId</TableHead>
                        <TableHead>FirstName</TableHead>
                        <TableHead>LastName</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>JobTitle</TableHead>
                        <TableHead>ServiceCharge</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            workers.map((worker)=>(
                                <TableRow key={worker.id}>
                                    <TableCell>{worker.id}</TableCell>
                                    <TableCell>{worker.firstName}</TableCell>
                                    <TableCell>{worker.lastName}</TableCell>
                                    <TableCell>{worker.location}</TableCell>
                                    <TableCell>{worker.job}</TableCell>
                                    <TableCell>{worker.charge}</TableCell>
                                    <TableCell className="flex justify-between">
                                        <form action={goToUpdatePage}>
                                            <input type="hidden" name="id" value={worker.id}/>
                                            <Button>Update</Button>
                                        </form>   
                                        <form action={deleteWorker}>
                                            <input type="hidden" name="id" value={worker.id}/>
                                            <Button>Delete</Button>
                                        </form>   
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>

            </div>
            <div className="flex items-center justify-center">
                <Button asChild><Link href={"./workers/add"}>Add Worker</Link></Button>
            </div>
        </div>      
    )
}