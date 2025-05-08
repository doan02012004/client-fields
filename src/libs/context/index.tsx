/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/localStorage'
import { CheckBookingResponseType } from '../../types/api.type'
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
    openChangePasswordForm:boolean,
    bookingInfo: CheckBookingResponseType | null
    setUser: Dispatch<SetStateAction<any>>,
    setAccessToken: Dispatch<SetStateAction<any>>,
    setOpenMenuHeader: Dispatch<SetStateAction<boolean>>,
    setOpenFilterFields: Dispatch<SetStateAction<boolean>>,
    setOpenTodayField: Dispatch<SetStateAction<boolean>>,
    setBookingInfo: Dispatch<SetStateAction<any>>,
    setOpenListCouponCheckout: Dispatch<SetStateAction<boolean>>,
    setOpenChangePasswordForm:  Dispatch<SetStateAction<boolean>>
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
    const [bookingInfo, setBookingInfo] = useLocalStorage('tt_booking', null)
    const [accessToken, setAccessToken] = useLocalStorage('access_token', null)
    const [user, setUser] = useLocalStorage('user', null)
    const [loadingAuth,setLoadingAuth] = useState(true)
    // const {data} = useGetMeQueryFn()

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


  // const logout = () => {
  //   setAccessToken(null);
  //   setUser(null);
  //   localStorage.clear();
  // };

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
            loadingAuth
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