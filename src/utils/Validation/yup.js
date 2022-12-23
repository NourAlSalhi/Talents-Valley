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
// const schemaFile = yup.object({
//     file: yup.mixed()
//         .test('required', "You need to provide a file", (value) => {
//             return value && value.length
//         })
//         .test("fileSize", "Your file is too big", (value) => {
//             return value && value[0] && value[0].size <= 200000;
//         }),
// })
// const verifiyId = yup.object({
//     select: yup.string().required("document is required!"),
//     id:  yup.number().transform(value => (isNaN(value) ? undefined : value)).required("ID is required!")
// })

// export const schemaVerifiyId = verifiyId.concat(schemaFile)

const schemaFile = yup.object({
    file: yup.mixed()
        .test('required', "You need to provide a file", (value) => {
            return value && value.length
        })
        .test("fileSize", "Your file is too big", (value) => {
            return value && value[0] && value[0].size <= 200000;
        }),
})
export const verifiyId = schemaFile.concat(yup.object({
    // select: yup.string().required("document is required!"),
    id: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable().required("this filed is required"),
}))

