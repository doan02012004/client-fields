import { create } from 'zustand'
import { BranchDetailsType, SelectDateType, SelectFieldType } from '../../types/api.type'

type State = {
    image: string
    selectedField:SelectFieldType | null,
    selectedDate:SelectDateType | null,
    selectedTimeId:string|null,
    openListDateField:boolean,
    branchDetail:BranchDetailsType|null
  }
  
type Action = {
    setImage: (imageUrl: State['image']) => void
    setSelectedField: (field: State['selectedField']) => void
    setSelectedDate:(date: State['selectedDate']) => void,
    setSelectedTime:(selectedTimeId:State['selectedTimeId']) => void,
    setOpenListDateField:(isOpenListDateField:State['openListDateField']) => void,
    setBranchDetail:(data:State['branchDetail']) => void,
  }
  

export const useBranchDetail = create<State & Action>((set) => ({
    image: '',
    selectedField:null,
    branchDetail:null,
    selectedDate:null,
    selectedTimeId:null,
    openListDateField:false,
    setImage: (imageUrl:string) => set(() => ({ image: imageUrl })),
    setSelectedField:(field) => set(() => ({ selectedField: field, selectedDate:null, selectedTimeId:null })),
    setSelectedDate:(date) => set(() => ({ selectedDate: date })),
    setSelectedTime: (selectedTimeId) => set(() => ({ selectedTimeId:selectedTimeId})),
    setOpenListDateField: (isOpenListDateField) => set(() => ({openListDateField:isOpenListDateField})),
    setBranchDetail:(data) => set(() => ({branchDetail:data}))
  }))

