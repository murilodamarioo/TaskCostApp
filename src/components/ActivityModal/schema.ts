import * as Yup from 'yup'

import { parseDateInput } from '@/shared/helpers/date-input'

export const activitySchema = Yup.object().shape({
  title: Yup.string().trim().required('Título é obrigatório'),
  activityDate: Yup.string()
    .required('Data é obrigatória')
    .test(
      'valid-date',
      'Formato esperado: dd/mm/aaaa',
      (value) => !value || parseDateInput(value) !== null
    )
})