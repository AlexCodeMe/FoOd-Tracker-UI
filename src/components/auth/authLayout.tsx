import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <div className='h-screen flex items-center justify-center bg-yellow-100'>
      <Outlet />
    </div>
  )
}