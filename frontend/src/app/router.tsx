import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from '@/modules/home/Home'
import ConocenosPage from '@/modules/conocenos/pages/ConocenosPage'
import TicketsPage from '@/modules/tickets/pages/TicketsPage'
import ContactanosPage from '@/modules/contactanos/pages/ContactanosPage'
import AtraccionesPage from '@/modules/atracciones/pages/AtraccionesPage'
import TirolesaPage from '@/modules/atracciones/pages/TirolesaPage'
import CarrosRCPage from '@/modules/atracciones/pages/CarrosRCPage'
import ToboganArcoirisPage from '@/modules/atracciones/pages/ToboganArcoirisPage'
import TrampolinNinosPage from '@/modules/atracciones/pages/TrampolinNinosPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'conocenos',
        element: <ConocenosPage />,
      },
      {
        path: 'tickets',
        element: <TicketsPage />,
      },
      {
        path: 'contactanos',
        element: <ContactanosPage />,
      },
      {
        path: 'atracciones',
        element: <AtraccionesPage />,
      },
      {
        path: 'atracciones/tirolesa',
        element: <TirolesaPage />,
      },
      {
        path: 'atracciones/carros-rc',
        element: <CarrosRCPage />,
      },
      {
        path: 'atracciones/tobogan-arcoiris',
        element: <ToboganArcoirisPage />,
      },
      {
        path: 'atracciones/trampolin-ninos',
        element: <TrampolinNinosPage />,
      },
    ],
  },
])
