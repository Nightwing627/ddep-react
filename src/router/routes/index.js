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
    path: '/secondpage/Add',
    component: lazy(() => import('../../views/componets/add'))
  },
  {
    path: '/second-page/List',
    component: lazy(() => import('../../views/componets/AllProjectList'))

  },
  {
    path: '/newitem',
    component: lazy(() => import('../../views/componets/CreateNewProject.js/index'))
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
