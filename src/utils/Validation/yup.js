import * as yup from "yup";


export const registerAccountSchema = yup.object({
    email: yup.string().email().required('this field must be an email').trim(),
    password: yup.string().required('this field must be an password .').trim(),
    newPassword: yup.string().min(6, 'must be more than 6 charterer .').required(),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'passwords must match').required(),
}).required();