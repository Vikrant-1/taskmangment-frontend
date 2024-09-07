import zod from "zod";
export const zodRegisterFormSchema = zod.object({
  username: zod.string().email("Please enetr a valid email"),
  firstname: zod.string().min(3, "Firstname must be at least 3 characters"),
  lastname: zod.string().min(3, "Lastname must be at least 3 characters"),
  password: zod
    .string()
    .min(6, "Password must be of 6 characters.")
    .max(30, "Password must be less than 30 characters."),
});
