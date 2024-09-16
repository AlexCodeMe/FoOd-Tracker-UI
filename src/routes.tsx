// import { lazy, Suspense } from 'react';
// import { RouteObject, Navigate } from 'react-router-dom';
// import Layout from './components/layout/layout';
// import AuthLayout from './components/auth/authLayout';

// const Dashboard = lazy(() => import('./pages/dashboard'));
// const Profile = lazy(() => import('./pages/profile'));
// const Login = lazy(() => import('./pages/login'));
// const Register = lazy(() => import('./pages/register'));
// const NotFound = lazy(() => import('./pages/notFound'));

// const LazyLoad = (Component: React.LazyExoticComponent<React.ComponentType<object>>) => (
//   <Suspense fallback={<div>Loading...</div>}>
//     <Component />
//   </Suspense>
// );

// export const routes: RouteObject[] = [
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Navigate to="/dashboard" replace /> },
//       { path: 'login', element: LazyLoad(Login) },
//       { path: 'register', element: LazyLoad(Register) },
//       {
//         element: <AuthLayout />,
//         children: [
//           { path: 'dashboard', element: LazyLoad(Dashboard) },
//           { path: 'profile', element: LazyLoad(Profile) },
//           {
//             path: 'meals',
//             children: [
//               { index: true, element: <div>Meals Index</div> },
//               { path: 'add', element: <div>Add Meal</div> },
//               { path: ':id', element: <div>Meal Details</div> },
//               { path: ':id/edit', element: <div>Edit Meal</div> },
//             ],
//           },
//           {
//             path: 'recipes',
//             children: [
//               { index: true, element: <div>Recipes Index</div> },
//               { path: 'add', element: <div>Add Recipe</div> },
//               { path: ':id', element: <div>Recipe Details</div> },
//               { path: ':id/edit', element: <div>Edit Recipe</div> },
//             ],
//           },
//           {
//             path: 'foods',
//             children: [
//               { index: true, element: <div>Foods Index</div> },
//               { path: 'add', element: <div>Add Food</div> },
//               { path: ':id', element: <div>Food Details</div> },
//               { path: ':id/edit', element: <div>Edit Food</div> },
//             ],
//           },
//           { path: 'nutrition-goals', element: <div>Nutrition Goals</div> },
//           { path: 'dietary-preferences', element: <div>Dietary Preferences</div> },
//           { path: 'water-intake', element: <div>Water Intake</div> },
//           { path: 'export', element: <div>Export Data</div> },
//         ],
//       },
//     ],
//   },
//   { path: '*', element: LazyLoad(NotFound) },
// ];