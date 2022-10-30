import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().email().required('this field must be an email').trim(),
    password: yup.string().required('this field must be an password .').trim(),
}).required();

export const registerAccountSchema = yup.object({
    firstName: yup.string().required('this field must be an first name').trim(),
    lastName: yup.string().required('this field must be an last name').trim(),
    email: yup.string().email().required('this field must be an email').trim(),
    newPassword: yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,20}$/).required().trim(),
    mobile: yup.string().required('this field must be a number'),
    country: yup.string().required(),
}).required();

export const forgot = yup.object({
    email: yup.string().email().required('this field must be an email').trim(),
}).required();

export const resetPassword = yup.object({
    newPassword: yup.string().min(6, 'must be more than 6 charterer').max(10).required().trim(),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'passwords must match').required().trim(),
})

