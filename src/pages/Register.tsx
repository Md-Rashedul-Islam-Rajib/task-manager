import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useAppDispatch } from "@/redux/hooks";
import { register } from "@/redux/features/auth/authSlice";

/**
 * @constant registerSchema is a zod validation schema for the register form
 * @type TRegister is a type of the registerSchema
 * @function onSubmit is a function that dispatches the register action with the user data
 */

const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  role: z.enum(["admin", "manager", "user", ""]),
});

export type TRegister = z.infer<typeof registerSchema>;

const Register = () => {

    const dispatch = useAppDispatch();

  const form = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  const onSubmit = (user: TRegister) => {
      console.log(user);
        dispatch(register(user));

  };
  return (
    <Card className="w-[350px] mx-auto">
      <Form {...form}>
        <CardTitle className="text-4xl my-5">Register</CardTitle>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" autoComplete="password" { ...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Register</Button>
          </form>
        </CardContent>
      </Form>
    </Card>
  );
};

export default Register;
