import * as Yup from "yup";

export const vehicleValidationSchema = Yup.object({
  vehicleCategory: Yup.string()
    .required("Choose at least one Vehicle Category")
    .trim()
    .oneOf([
      "Two Wheeler Without Gear",
      "Two Wheeler With Gear",
      "Three Wheeler",
      "Four Wheeler",
    ]),
  customerName: Yup.string()
    .required("Customer Name is required")
    .trim()
    .max(15, "maximum character of customer name is 30 "),
  vehicleNumber: Yup.string()
    .required("Vehicle Number is required")
    .trim()
    .max(20, "maximum character of Vehicle Number is 20 "),
  vehicleBrand: Yup.string()
    .required("Vehicle Brand is required")
    .trim()
    .max(20, "maximum character of Vehicle Brand is 20 "),
  payment: Yup.number()
    .required("payment is required")
    .min(0, "Payment must be a positive number"),
  status: Yup.string().oneOf(
    ["Pending", "Completed"],
    "Status must be either Pending or Completed"
  ),
  problemDescription: Yup.string()
    .required("Description of actual problem is required")
    .trim()
    .max(100, "maximum character of Description is 100 "),
});
