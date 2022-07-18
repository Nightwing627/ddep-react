import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/projects/project-list'

// ** Merge Routes
const Routes = [
  // {
  //   path: '/home',
  //   component: lazy(() => import('../../views/Home'))
  // },
  {
    path: '/projects/add',
    component: lazy(() => import('../../views/componets/add'))
  },
  // {
  //   path: '/projects/project-list',
  //   component: lazy(() => import('../../views/componets/add'))
  // },
  {
    path: '/projects/project-list',
    component: lazy(() => import('../../views/componets/AllProjectList'))
  },
  {
    path: '/pronewitem',
    component: lazy(() => import('../../views/componets/CreateNewProject.js/index'))   
  },
  {
    path: '/projects/item/add',
    component: lazy(() => import('../../views/componets/CreateNewProject.js/index'))   
  },
  {
    path: '/projects/item/edit/:id',
    component: lazy(() => import('../../views/componets/CreateNewProject.js/index'))   
  },
  {
    path: '/projects/edit/:id',
    component: lazy(() => import('../../views/componets/wizard/EditStepper'))
  },
  {
    path: '/mapping',
    component: lazy(() => import('../../views/componets/Mapping/index'))
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
