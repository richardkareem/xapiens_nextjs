'use client'

import { store } from '@/redux/store'
import { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
type Props = {
  children:React.ReactNode
}
const ThemeProvider = ({children}: Props) => {
  return (
    <Provider store={store}>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
    />
      {children}
    </Provider>

  )
}

export default ThemeProvider