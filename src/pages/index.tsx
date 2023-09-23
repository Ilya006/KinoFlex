import React, { lazy } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

// Pages
const HomePage = lazy(() => import('./home/ui/home'))

export const Routing = () => {
  return <RouterProvider router={router} />
}

const routes = createRoutesFromElements(
  <Route path="/" element={<HomePage />} />
)

const router = createBrowserRouter(routes)
