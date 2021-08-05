const routes = [
  {
    path: '/',
    title: 'Home',
    icon: 'home',
  },
  {
    title: 'News',
  },
  {
    title: 'Products',
  },
  {
    title: 'About',
    children: [
      {
        title: 'Company',
      },
      {
        title: 'Team',
      },
      {
        title: 'Contact',
      },
    ]
  },
]

export default routes