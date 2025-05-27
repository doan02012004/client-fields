
export interface ImageResponseType {
    _id: string,
    image_url: string,
    name: string,
    isUsed: boolean
}

// ----------------------------------- * branch 

export interface SelectTimeBranchType {
    _id?: string,
    branchId?: string,
    startTime: number,
    endTime: number,
    text: string,
    disabled:boolean
}
export interface SelectFieldType {
    _id: string,
    name: string,
    images: string[],
    selected: boolean
}
export interface SelectDateType {
    dateDefault: string,
    date: string,
    dayNumber: number,
    selected: boolean,
    textDayInWeek: string,
    disabled:boolean
}
export interface BranchPayloadType {
    name: string,
    slug: string
    address_text: string,
    images: string[]
    diagramImage: string,
    city: string,
    district: string,
    ward: string
    description: string
    phoneNumber: string
    timeActive: {
        startTime: number // dạng phút
        endTime: number // dạng phút
        title: string
    },
    selectTimes: SelectTimeBranchType[],
    status:boolean
}

export type BranchType = BranchPayloadType & {
    _id: string,
    rate: number
}

export interface TimeInfoType {
    startTime: number | null,
    endTime: number | null,
    text: string | null,
}

export type ListTimeItemType = SelectTimeBranchType & {
    selected: boolean,
    disabled: boolean

}
export type BranchDetailsType = {
    item: BranchType,
    listField: SelectFieldType[],
    listDate: SelectDateType[],
    listTime:ListTimeItemType[],
    price_infos: { value: number, label: string }[],
    time_info: TimeInfoType
    price: number
}

export interface CheckBookingPayload {
    fieldId:string,
    date:string,
    timeId:string,
}

export type CheckBookingResponseType = CheckBookingPayload & {
    endTime:number,
    dayNumber:number,
}
// ---------------------------- field

export interface RangeTime {
    _id?: string,
    startTime: number,
    endTime: number,
    text: string
}

export interface RangePrice {
    _id?: string,
    name: string,
    fieldId?: string,
    dayInWeek: number[],
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
    rangeTimes: RangeTime[]
    description: string,
    status: boolean,
    size: {
        width: number,
        length: number
    },
    rangePrices: RangePrice[]
}

export type FieldType = Omit<FieldPostPayloadType, 'rangePrices'> & {
    _id: string,
    rangePrices: RangePriceResponse[]
}

export type FieldResponeType = FieldType & {
    branch: Omit<BranchType, 'images' | 'diagramImage' | 'timeActive' | 'description' | 'phoneNumber' | 'slug'>,
    url_path: string
}

export interface TimeWeek {
    _id: string,
    values: number[],
    text: string
}

// ---------------------------- type-field

export interface TypeFieldPayload {
    name: string,
    playerNumber: number
}

export type TypeFieldResponse = TypeFieldPayload & {
    _id: string,
    deletedAt: null | string
}

// ---------------------------------- checkout

export type CheckoutResponse = {
    item: FieldResponeType,
    price: number,
    date: string
    dateFomat: string,
    dayTextInWeek: string,
    endTime:number,
    dayNumber:number,
    priceDeposit:number,
    timeText:string,
    timeId:string
}

export type StatusOrderField =  'pending' | 'unpaid' | 'confirmed' | 'completed' | 'refund' | 'refunded' | 'canceled'

export interface OrderFieldResponse {
    _id: string,   
    orderCode: string,
    fieldId: FieldResponeType,
    branchId: BranchType,
    userId: {_id: string, name: string, phoneNumber: string,email: string},
    dayBookings: string[],
    timeId: string,
    dayNumber: number,
    priceDeposit: number,
    totalPrice: number,
    statusBooking: StatusOrderField,
    paymentMethod: 'vnpay' | 'cash',
    createdAt: string,
    isRating:boolean,
    paymentDate:string|null
}

export type OrderFieldResponseAdmin = Omit<OrderFieldResponse,'timeId'> & {
    dayTextInWeek: string,
    timeId: TimeInfoType,
}

export type OrderFieldResponseFieldDetail = Omit<OrderFieldResponse,'timeId'> & {
    timeId: TimeInfoType,
}