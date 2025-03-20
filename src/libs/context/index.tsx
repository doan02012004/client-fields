import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'


interface AppContextProps {
    openMenuHeader:boolean,
    openFilterFields: boolean,
    openTodayField:boolean,
    setOpenMenuHeader: Dispatch<SetStateAction<boolean>>,
    setOpenFilterFields: Dispatch<SetStateAction<boolean>>,
    setOpenTodayField:Dispatch<SetStateAction<boolean>>,
}
const Context = createContext<AppContextProps|null>(null)

type ContextProviderProps = {
    children: React.ReactNode
}
const ContextProvider = ({ children }: ContextProviderProps) => {
    const [openFilterFields, setOpenFilterFields] = useState<boolean>(false)
    const [openMenuHeader, setOpenMenuHeader] = useState<boolean>(false)
    const [openTodayField, setOpenTodayField] = useState<boolean>(false)
    return (
        <Context.Provider value={{ openFilterFields, setOpenFilterFields,openMenuHeader,setOpenMenuHeader,openTodayField,setOpenTodayField }}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(Context)
    if (context === null) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context
}

export default ContextProvider