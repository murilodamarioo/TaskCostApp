import { useSnackBarContext } from '@/context/snackbar.context'

import { AppError } from '../helpers/AppError'

export const useErrorHandler = () => {
  const { notify } = useSnackBarContext()

  const handleError = (error: unknown, defaultMessage?: string) => {
    const isApiError = error instanceof AppError

    const message = isApiError ? error.message : defaultMessage ?? 'Falha na requisição'

    notify({ message, messageType: 'ERROR' })
  }

  return { handleError }
}