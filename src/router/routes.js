const routes = [
  {
    path: '/',
    name: 'SorakaFlix',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: 'SorakaFlix'

    },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  // Sempre deixe esta rota como a última,
  // mas você também pode removê-la
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
