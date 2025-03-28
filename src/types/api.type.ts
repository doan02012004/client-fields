
export interface ImageResponseType {
    _id: string,
    image_url: string,
    name: string,
    isUsed: boolean
}

// ----------------------------------- * branch 
export interface BranchPayloadType {
    name: string,
    slug: string
    address_text: string,
    images: string[]
    diagramImage: string,
    city: string,
    ward: string
    description: string
    phoneNumber: string
    timeActive: {
        startTime: number // dạng phút
        endTime: number // dạng phút
        title: string
    }
}

export type BranchType = BranchPayloadType & {
    _id: string,
    rate: number
}

// ---------------------------- field

export interface RangeTime {
    _id?:string,
    startTime: number,
    endTime: number,
    text: string
}

export interface RangePrice {
    _id?:string,
    name: string,
    fieldId?: string,
    startDayInWeek: number,
    endDayInWeek: number,
    startTime: number,
    endTime: number,
    title: string,
    price: number
}

export type RangePriceResponse = RangePrice & {
    deletedAt: null | string
}

export interface FieldPostPayloadType {
    name: string,
    slug: string,
    branchId: string,
    images: string[],
    typeFields:string[],
    rangeTimes:RangeTime[]
    description: string,
    status: boolean,
    size: {
        width: number,
        length: number
    },
    rangePrices:RangePrice[]
}

export type FieldType = Omit<FieldPostPayloadType,'rangePrices'> & {
    _id:string,
    rangePrices:RangePriceResponse[]
}

export type FieldResponeType  = FieldType &{
    branch:Omit<BranchType,'images'| 'diagramImage' | 'timeActive'|'description'|'phoneNumber'|'slug'>
}

export interface TimeWeek {
    _id:string,
    from:number,
    to:number,
    text:string
}

// ---------------------------- type-field

export interface TypeFieldPayload {
    name:string,
    playerNumber:number
}

export type TypeFieldResponse = TypeFieldPayload & {
    _id:string,
    deletedAt:null|string
}