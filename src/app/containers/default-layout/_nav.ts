import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    // name: 'Theme'
    name: 'Home'

  },
  {
    // name: 'Colors',
    name: 'Slider',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    // name: 'Typography',
    name: 'Our Client',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-star' }
  },
  {
    // name: 'Components',
    name: 'Project',
    title: true
  },
  {
    // name: 'Base',
    name: 'Our On Going Project',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        // name: 'Accordion',
        name: 'Testimonial',
        url: '/base/accordion'
      },
      // {
      //   // name: 'Breadcrumbs',
      //   name: '2-Cards',
      //   url: '/base/breadcrumbs'
      // },
      // {
      //   // name: 'Cards',
      //   name: 'Imp Project Carrired By SNF',
      //   url: '/base/cards'
      // },
      // {
      //   // name: 'Carousel',
      //   name: 'Clean Water Projects',
      //   url: '/base/carousel'
      // },
      // {
      //   // name: 'Collapse',
      //   name: 'Shahid Jawan Fund',
      //   url: '/base/collapse'
      // },
      // {
      //   // name: 'List Group',
      //   name: 'Educational Facilities',
      //   url: '/base/list-group'
      // },
      // {
      //   // name: 'Navs & Tabs',
      //   name: 'Health & Medical Projects',
      //   url: '/base/navs'
      // },
      // {
      //   //   name: 'Pagination',
      //   name: 'Environmental Conservation',
      //   url: '/base/pagination'
      // },
      // {
      //   // name: 'Placeholder',
      //   name: 'Sport Projects',
      //   url: '/base/placeholder'
      // },
      // {
      //   //   name: 'Popovers',
      //   name: 'Birthday Celebrations',
      //   url: '/base/popovers'
      // },
     
      {
        //   name: 'Popovers',
        name: 'Upcoming Project',
        url: '/base/carousel'
      },
      {
        //name;'projectcategory'
        name:'Add project Category',
        url:'/base/project'
      },
    ]
  },
  {
    // name: 'Buttons',
    name: 'Media/Awards',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        // name: 'Buttons',
        name: 'Articles',
        url: '/buttons/buttons'
      },
      {
        // name: 'Button groups',
        name: 'Home Page Articles',
        url: '/buttons/button-groups'
      },
      {
        // name: 'Dropdowns',
        name: 'Awards Recognition',
        url: '/buttons/dropdowns'
      }
    ]
  },
   {
    name: 'Forms',
     url: '/forms',
     iconComponent: { name: 'cil-notes' },
     children: [
    //    {
    //      name: 'Form Control',
    //    url: '/forms/form-control'
    //   },
    //   {
    //      name: 'Select',
    //     url: '/forms/select'
    //   },
    //   {
    //     name: 'Checks & Radios',
    //     url: '/forms/checks-radios'
    //   },
    //    {
    //      name: 'Range',
    //    url: '/forms/range'
    //  },
    //  {
    //     name: 'Input Group',
    //      url: '/forms/input-group'
    //    },
    //  {
    //     name: 'Floating Labels',
    //     url: '/forms/floating-labels'
    //    },
    //    {
    //     name: 'Layout',
    //     url: '/forms/layout'
    //   },
    //   {
    //     name: 'Validation',
    //     url: '/forms/validation'
    //   },
      {
        name:'News And Articles',
        url:'/forms/news-articles'
      },
     { 
     name:'Mentors',
     url:'/forms/mentors'
     },
     { 
      name:'Founder',
      url:'/forms/founder-team'
      },
      {
        name:'Nri Participants',
        url:'/forms/nri-participants'
      },
      {
        name:'State Participants',
        url:'/forms/state'
      }

    ]
   },
  {
    // name: 'Charts',
    name: 'Contact',
    url: '/charts',
    iconComponent: { name: 'cil-bell' }
  },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
  {
    title: true,
    name: 'Links',
    class: 'py-0'
  },
  // {
  //   name: 'Live Project',
  //   url: 'https://www.socialforumindia.com/cmplpro.php',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank', class: '-text-dark' },
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'SNF Website',
  //   url: 'https://www.socialforumindia.com/',
  //   iconComponent: { name: 'cil-layers' },
  //   attributes: { target: '_blank' }
  // },
  //LogOut
  {
    name: 'Logout',
    url: '/logout', // Navigate to the logout route
    iconComponent: { name: 'cil-account-logout' }
}
  
];
