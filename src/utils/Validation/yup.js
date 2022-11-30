import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().email().required('this field must be an email').trim(),
    password: yup.string().required('this field must be an password .').trim(),
}).required();

export const registerAccountSchema = yup.object({
    firstName: yup.string().required('this field must be an first name').trim(),
    lastName: yup.string().required('this field must be an last name').trim(),
    email: yup.string().email().required('this field must be an email').trim(),
    newPassword: yup.string().required('must be req').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,20}$/, 'must be strong').trim(),
    mobile: yup.string().required('reqq'),
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
    // Select: yup.string().ensure().required("document is required!"),
    id: yup.string().required().matches(/^[0-9]+$/, "Must be only digits").max(9, 'Must be exactly 5 digits').trim(),
    file: yup.mixed()
        .test('required', "You need to provide a file", (value) => {
            return value && value.length
        })
        .test("fileSize", "Your file is too big", (value) => {
            return value && value[0] && value[0].size <= 200000;
        }),
    // })
})

