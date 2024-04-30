import Yup from "yup";

export const vehicleValidationSchema = Yup.object({
  VehicleCategory: Yup.string()
    .required("Choose at least one Vehicle Category")
    .trim()
    .oneOf([
      "Two Wheeler Without Gear",
      "Two Wheeler With Gear",
      "Three Wheeler",
      "Four Wheeler",
    ]),
  vehicleNumber: Yup.string()
    .required("Vehicle Number is required")
    .trim()
    .max(55, "maximum character of vehicle number is 15 "),
  vehicleName: Yup.string()
    .required("Vehicle Name is required")
    .trim()
    .max(55, "maximum character of Vehicle name is 20 "),
  vehicleBrand: Yup.string()
    .required("Vehicle Brand is required")
    .trim()
    .max(55, "maximum character of Vehicle Brand is 20 "),
  problemDescription: Yup.string()
    .required("Description of actual problem is required")
    .trim()
    .max(55, "maximum character of Description is 100 "),
});
