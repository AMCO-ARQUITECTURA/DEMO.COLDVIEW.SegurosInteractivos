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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/common.css'
import './styles/variables.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import reportWebVitals from './reportWebVitals.ts'

import LoginView from './views/LoginView/LoginView.tsx'
import VersionMenuView from './views/VersionMenuView/VersionMenuView.tsx'
import CarInsuranceDashboardView from './views/CarInsuranceDashboardView/CarInsuranceDashboardView.tsx'
import LifeInsuranceDashboardView from './views/LifeInsuranceDashboardView/LifeInsuranceDashboardView.tsx';



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
//   component: VersionMenuView,
// })

const mxCarInsuranceDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/car-insurance-dashboard',
  component: CarInsuranceDashboardView
})

const mxLifeInsuranceDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/life-insurance-dashboard',
  component: LifeInsuranceDashboardView
})

const routeTree = rootRoute.addChildren([indexLoginRoute, mxCarInsuranceDashboardRoute, mxLifeInsuranceDashboardRoute])

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
