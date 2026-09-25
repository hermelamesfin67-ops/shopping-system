import * as Yup from "yup"

export const loginSchema = Yup.object().shape({
    username: Yup.string()
        .required("Username is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});
export const signUpSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
    username: Yup.string()
        .required("Username is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

export type LoginSchemaType = Yup.InferType<typeof loginSchema>
export type SignUpSchemaType = Yup.InferType<typeof signUpSchema>