import './src/styles/global.css'

import { NavigationRoutes } from '@/routes'

import { Snackbar } from '@/components/SnackBar'

import { AuthContextProvider } from '@/context/auth.context'
import { SnackbarContextProvider } from '@/context/snackbar.context'
import { ActivityContextProvider } from '@/context/activity.context'

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <ActivityContextProvider>
          <NavigationRoutes />
          <Snackbar />
        </ActivityContextProvider>
      </AuthContextProvider>
    </SnackbarContextProvider>
  )
}
