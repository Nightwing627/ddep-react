import { Mail, Home, Circle, FileText, Settings} from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Item',
    icon: <FileText size={20} />,
    navLink: '/second-page',
    children: [
      {
        id: "secondPage",
        title: "List",
        // type: "item",
        icon: <Circle size={12} />,
        // permissions: ["admin", "editor"],
        navLink: "/second-page/List"
      },
      {
        id: "secondPage",
        title: "add",
        // type: "item",
        icon: <Circle size={12} />,
        // permissions: ["admin", "editor"],
        navLink: "/secondPage/Add"
      }
    ]
  }
  // {
  //   id: 'Admin Configure',
  //   title: 'Admin Configure',
  //   icon: <Settings size={20} />,
  //   navLink: '/second-page',
  //   children: [
  //     {
  //       id: "User Maintenancet",
  //       title: "User Maintenancet",
  //       type: "item",
       
  //       permissions: ["admin", "editor"],
  //       navLink: "/second-page/List",
  //       children: [
  //         {
  //           id: "shop",
  //           title: "List",
  //           type: "item",
  //           icon: <Circle size={12} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/User Maintenancet/List"
  //         },
  //         {
  //           id: "detail",
  //           title: "Access Rights",
  //           type: "item",
  //           icon: <Circle size={12} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/User Maintenancet/Access Rights"
  //         }
  //       ]
  //     },
  //     {
  //       id: "Template",
  //       title: "Template",
  //       type: "item",
        
  //       permissions: ["admin", "editor"],
  //       navLink: "/Template/add",
  //       children: [
  //         {
  //           id: "shop",
  //           title: "List",
  //           type: "item",
  //           icon: <Circle size={12} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/Template/List"
  //         },
  //         {
  //           id: "detail",
  //           title: "Add",
  //           type: "item",
  //           icon: <Circle size={12} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/Template/Add"
  //         }
  //       ]
  //     },
  //     {
  //       id: "Template",
  //       title: "Basic Information",
  //       type: "item",
  //       icon: <Circle size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Basic Information"
  //     },
  //     {
  //       id: "Analytics Report",
  //       title: "Analytics Report",
  //       type: "item",
  //       icon: <Circle size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Analytics Report"
  //     },
  //     {
  //       id: "Notification / Alert",
  //       title: "Notification / Alert",
  //       type: "item",
  //       icon: <Circle size={15} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/Notification / Alert"
  //     }
  //   ]
  // }
  // {
  //   id: "eCommerce",
  //   title: "Ecommerce",
  //   type: "collapse",
  //   icon: <Icon.ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: "shop",
  //       title: "Shop",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/ecommerce/shop"
  //     },
  //     {
  //       id: "detail",
  //       title: "Product Detail",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/ecommerce/product-detail"
  //     },
  //     {
  //       id: "wishList",
  //       title: "Wish List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/ecommerce/wishlist"
  //     },
  //     {
  //       id: "checkout",
  //       title: "Checkout",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/ecommerce/checkout"
  //     }
  //   ]
  // }
]
