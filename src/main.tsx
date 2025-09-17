import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import './styles.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import reportWebVitals from './reportWebVitals.ts'

import LoginView from './views/LoginView/LoginView.tsx'
import VersionMenuView from './views/VersionMenuView/VersionMenuView.tsx'
import CarInsuranceDashboardView from './views/CarInsuranceDashboardView/CarInsuranceDashboardView.tsx'


const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})

const indexLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LoginView,
})

// const versionMenuRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: '/version-menu',
//   component: () => VersionMenuView,
// })

const carInsuranceDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/car-insurance-dashboard',
  // component: () => <div>asd</div>
  component: CarInsuranceDashboardView
})

const routeTree = rootRoute.addChildren([indexLoginRoute, carInsuranceDashboardRoute])

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
