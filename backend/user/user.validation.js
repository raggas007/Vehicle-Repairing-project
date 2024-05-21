import Yup from "yup";

export let userValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("first name is required.")
    .trim()
    .max(55, " first name must not be more than 55 character."),
  lastName: Yup.string()
    .required("last name is required.")
    .trim()
    .max(55, "last name must not be more than 55 character."),
  email: Yup.string()
    .email()
    .required("email is required")
    .trim()
    .lowercase()
    .max(20, "email must not be more than 20 character."),
  password: Yup.string()
    .required("password is required.")
    .trim()
    .min(6, "minimum six character is required.")
    .max(20, "maximum character should be not more than 20."),
  address: Yup.string()
    .required("adress is required.")
    .trim()
    .max(55, "address should not be more than 55 character"),
  role: Yup.string()
    .oneOf(["Customer", "Mechanic"])
    .required("role is required"),
  skills: Yup.string().nullable().trim(),
  phoneNumber: Yup.number().required("phone number is required."),
});

export let loginUserValidationSchema = Yup.object({
  email: Yup.string().required("email is required").lowercase().trim(),
  password: Yup.string().required("password is required").trim(),
});

export const updateUserValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  password: Yup.string(),
  // Add other fields that can be updated
});
