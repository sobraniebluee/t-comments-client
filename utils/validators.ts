import * as yup from "yup";

export const validateLoginSchema = yup.object({
    username: yup.string().required("Please, enter your username!"),
    password:yup.string().required("Please, enter your password!")
})

export const validateRegisterSchema = yup.object({
    username: yup.string().required("Please, enter your @username"),
    email: yup.string().required("Please, enter your email").email("Please, enter valid email"),
    password: yup.string().required("Please, enter your password")
        .matches(/(?=.*[A-Z])/, " - Password must be contained upper letter")
        .matches(/(?=.*\d)/, " - Password must be contained one number")
        .matches(/(?=.*[@$!%*#?&])/, " - Password must be contained special char")
        .min(8, " - Password must be contained more than 8 chars")
})

