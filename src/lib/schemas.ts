import {z} from "zod";

export const WorkerFormSchema = z.object({
    id: z.number(),
    firstName:z.string(),
    lastName:z.string(),
    location:z.string(),
    job:z.string(),
    charge:z.string()
})

