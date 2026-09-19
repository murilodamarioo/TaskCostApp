import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Nome é obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória')
})