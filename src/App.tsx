import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/layout"
import AuthLayout from "./components/auth/authLayout"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Dashboard from "./pages/dashboard"
import Profile from "./pages/profile"
import Login from "./pages/login"
import Register from "./pages/register"
import NotFound from "./pages/notFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<h1 className='text-6xl text-indigo-400'>Hello Alex</h1>}
        />

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route element={<Layout />}>
            <Route path='meals'>
              <Route index element={<div>Meals Index</div>} />
              <Route path='add' element={<div>Add Meal</div>} />
              <Route path=':id' element={<div>Meal Details</div>} />
              <Route path=':id/edit' element={<div>Edit Meal</div>} />
            </Route>
            <Route path='recipes'>
              <Route index element={<div>Recipes Index</div>} />
              <Route path='add' element={<div>Add Recipe</div>} />
              <Route path=':id' element={<div>Recipe Details</div>} />
              <Route path=':id/edit' element={<div>Edit Recipe</div>} />
            </Route>
            <Route path='foods'>
              <Route index element={<div>Foods Index</div>} />
              <Route path='add' element={<div>Add Food</div>} />
              <Route path=':id' element={<div>Food Details</div>} />
              <Route path=':id/edit' element={<div>Edit Food</div>} />
            </Route>
            <Route
              path='nutrition-goals'
              element={<div>Nutrition Goals</div>}
            />
            <Route
              path='dietary-preferences'
              element={<div>Dietary Preferences</div>}
            />
            <Route path='water-intake' element={<div>Water Intake</div>} />
            <Route path='export' element={<div>Export Data</div>} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
