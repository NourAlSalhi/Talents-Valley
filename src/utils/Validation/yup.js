import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().email().required('this field must be an email').trim(),
    password: yup.string().required('this field must be an password .').trim(),
}).required();

export const registerAccountSchema = yup.object({
    firstName: yup.string().required('this field must be an first name').trim(),
    lastName: yup.string().required('this field must be an last name').trim(),
    email: yup.string().email().required('this field must be an email').trim(),
    newPassword: yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,20}$/,'must be strong').required().trim(),
    mobile: yup.number().required('reqq'),
    country: yup.string().required('req'),
}).required();

export const forgot = yup.object({
    email: yup.string().email().required('this field must be an email').trim(),
}).required();

export const resetPassword = yup.object({
    ResetPassword: yup.string().required().trim(),
    confirmPassword: yup.string().oneOf([yup.ref('ResetPassword')], 'password must match').required().trim(),
})

export const verifiyId = yup.object({
    document: yup.string().required('req'),
    id: yup.number().required('reqqqqq'),
    // file: yup.required("You need to provide a file")
    //     .test("fileSize", "File Size is too large", (value) => {
    //         console.log(value[0].size);
    //         return value[0].size <= 5242880;
    //     }),
    file: yup.string().required()
})

