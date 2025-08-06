import React from 'react'
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import { Toaster } from "react-hot-toast";
import ReportItem from './Pages/ReportItem'
import FoundItemsPage from './Pages/FoundItemsPage'
import LostReports from './Pages/LostReports'
import PickupGuidelines from './Components/PickupGuidelines'
import Contact from './Components/Contact'
import AuthContext from './context/AuthContext'
import Loader from './Components/Loader'

const App = () => {
  return (
    <>
    <Loader />
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/reportitem' element={<ReportItem/>} />
      <Route path="/found" element={<FoundItemsPage />} />
      <Route path="/lost" element={<LostReports />} />
      <Route path="/guidelines" element={<PickupGuidelines />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    </>
  )
}

export default App