import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/projectList ',
    component: lazy(() => import('../../views/componets/SecondPage'))
  },
  {
    path: '/second-page/List',
    component: lazy(() => import('../../views/componets/AllProjectList'))
  },
  {
    path: '/Edit',
    component: lazy(() => import('../../views/componets/wizard/EditStepper'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout'
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
