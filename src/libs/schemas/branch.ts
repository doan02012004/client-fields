import { z } from "zod";

export const branchFormAddSchema = z.object({
    name: z.string().min(3).max(50),
    slug: z.string().min(3),
    address_text:z.string().min(3),
    images:z.array(z.string()),
    diagramImage:z.string().min(3),
    city:z.string().min(3),
    ward:z.string().min(3),
    description:z.string().min(3),
    phoneNumber:z.string().min(3),
    timeActive: z.object({
        startTime:z.number().min(0),
        endTime: z.number().min(0), 
        title:z.string().min(0)
    }),
    selectTimes:z.array(z.object({
        _id:z.string().optional(),
        startTime:z.number().min(0).max(1440), 
        endTime: z.number().min(0).max(1440),
        text:z.string().min(0),
    })).min(1)
})