import { z } from "zod";

const fieldItemFormAddSchema = z.object({
    name: z.string().min(3).max(50),
    fieldId: z.string().optional(),
    startDayInWeek: z.number().min(0),
    endDayInWeek: z.number().min(0),
    startTime: z.number().min(0),
    endTime: z.number().min(0),
    title: z.string().min(1),
    price: z.number().min(0),
})

export const fieldFormAddSchema = z.object({
    name: z.string().min(3).max(50),
    slug: z.string().min(3),
    branchId: z.string().min(3),
    images: z.array(z.string()).min(1),
    description: z.string().min(3),
    typeFields:z.array(z.string()).min(1),
    size: z.object({
        width: z.number().min(1),
        length: z.number().min(1)
    }),
    rangeTimes: z.array(z.object({
        // _id:z.string().optional(),
        text: z.string().min(0),
        startTime: z.number().min(0),
        endTime: z.number().min(0)
    })),
    status:z.boolean(),
    rangePrices:z.array(fieldItemFormAddSchema)
})

const fieldItemFormEditSchema = fieldItemFormAddSchema.extend({
    deletedAt: z.string().or(z.null()).optional()
})
export const fieldFormEditSchema = fieldFormAddSchema.omit({rangePrices:true}).extend({
    rangePrices: z.array(fieldItemFormEditSchema)
})