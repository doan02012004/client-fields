/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/localStorage'
import { CheckBookingResponseType, OrderFieldResponseFieldDetail } from '../../types/api.type'
import { getMeQueryFn } from '../data/auth'
import { UserType } from '../../types/auth'



interface AppContextProps {
    openMenuHeader: boolean,
    openFilterFields: boolean,
    openTodayField: boolean,
    openListCouponCheckout: boolean,
    accessToken: string | null,
    user: UserType|null,
    loadingAuth: boolean,
    isOpenRating: boolean,
    openDiagramField:boolean,
    openChangePasswordForm:boolean,
    locations: any,
    setLocations: Dispatch<SetStateAction<any>>,
    orderFields:OrderFieldResponseFieldDetail[],
    bookingInfo: CheckBookingResponseType | null
    setUser: Dispatch<SetStateAction<any>>,
    setAccessToken: Dispatch<SetStateAction<any>>,
    setOpenMenuHeader: Dispatch<SetStateAction<boolean>>,
    setOpenFilterFields: Dispatch<SetStateAction<boolean>>,
    setOpenTodayField: Dispatch<SetStateAction<boolean>>,
    setBookingInfo: Dispatch<SetStateAction<any>>,
    setOpenListCouponCheckout: Dispatch<SetStateAction<boolean>>,
    setOpenChangePasswordForm:  Dispatch<SetStateAction<boolean>>,
    setIsOpenRating:Dispatch<SetStateAction<boolean>>,
    setOpenDiagramField:Dispatch<SetStateAction<boolean>>,
    setOrderFields:Dispatch<SetStateAction<any>>,
}
const Context = createContext<AppContextProps | null>(null)

type ContextProviderProps = {
    children: React.ReactNode
}
const ContextProvider = ({ children }: ContextProviderProps) => {
    const [openFilterFields, setOpenFilterFields] = useState<boolean>(false)
    const [openMenuHeader, setOpenMenuHeader] = useState<boolean>(false)
    const [openTodayField, setOpenTodayField] = useState<boolean>(false)
    const [openChangePasswordForm, setOpenChangePasswordForm] = useState<boolean>(false)
    const [openListCouponCheckout, setOpenListCouponCheckout] = useState<boolean>(false)
    const [openDiagramField, setOpenDiagramField ] = useState<boolean>(false)
     const [isOpenRating, setIsOpenRating] = useState(false)
    const [bookingInfo, setBookingInfo] = useLocalStorage('tt_booking', null)
    const [accessToken, setAccessToken] = useLocalStorage('access_token', null)
    const [user, setUser] = useLocalStorage('user', null)
    const [locations, setLocations] = useLocalStorage('locations', [])
    const [loadingAuth,setLoadingAuth] = useState(true)
     const [orderFields, setOrderFields] = useState([]) 
   

  // Khi app load, lấy từ localStorage
  useEffect(() => {
    setLoadingAuth(false);
    // Sau khi set xong, có thể check getMe nếu muốn chắc chắn
    verifyUser();
  }, []);

  const verifyUser = async () => {
    if (!accessToken) return;
    try {
      const res = await getMeQueryFn()
      setUser(res.user);
    } catch (err) {
      console.error('AccessToken invalid, need refresh or logout',err);
      setUser(null)
      // logout();
    }
  };

  useEffect(() => {
    if(!locations || locations.length == 0){
        const fetchLocation = async () => {
            try {
                const res = await fetch(`https://esgoo.net/api-tinhthanh/${4}/${0}.htm`)
                const data = await res.json()
                setLocations(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchLocation()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[locations])



    return (
        <Context.Provider value={{
            openFilterFields,
            setOpenFilterFields,
            openMenuHeader,
            setOpenMenuHeader,
            openTodayField,
            setOpenTodayField,
            bookingInfo,
            setBookingInfo,
            openListCouponCheckout,
            setOpenListCouponCheckout,
            openChangePasswordForm,
            setOpenChangePasswordForm,
            accessToken,
            setAccessToken,
            user,
            setUser,
            loadingAuth,
            isOpenRating,
            setIsOpenRating,
            openDiagramField,
            setOpenDiagramField,
            orderFields,
            setOrderFields,
            locations,
            setLocations
        }}>
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