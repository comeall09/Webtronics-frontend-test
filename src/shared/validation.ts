import * as yup from "yup"

export const schemes = {
  name: yup
    .string()
    .required("name is required")
    .min(3, "name must be at least 3 characters")
    .max(20, "name must not exceed 20 characters"),
  phone: yup
    .string()
    .required()
    .test("isNumbers", "enter numbers only", (str) =>
      str!.split("").every((num) => Number(num))
    ),
  email: yup.string().required().email(),
}