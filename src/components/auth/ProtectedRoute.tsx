import { useAuth } from "@/context/AuthContext"
import { Loader2 } from "lucide-react";
import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute: React.FC = () => {
    const { isAuthenticated, isLoading } = useAuth();
  
    if (isLoading) {
      return <Loader2 className='animate-spin' />
    }
  
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }
  
    return <Outlet />
  };
  
  export default ProtectedRoute;
