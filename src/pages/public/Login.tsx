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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { login } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/store";
import { useNavigate } from "react-router";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  role: z.enum(["admin", "manager", "user", ""]),
});

type TLogin = z.infer<typeof loginSchema>;

const Login = () => {

    const {user } = useAppSelector((state: RootState) => state.auth);
  
  const navigate = useNavigate();
  
  const getRedirect = () => {
    switch (user?.role) {
      case "admin":
        return '/admin';
      case 'manager':
        return '/manager';
      case 'user':
        return '/user';
      default:
        return '/login'
    }
  }
  const dispatch = useAppDispatch();
  const form = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      
    },
  });

  const onSubmit = (data: TLogin) => {
    console.log(data);
    dispatch(login(data));
     navigate(getRedirect(), { replace: true });
    

    
  };
  return (
    <Card className="w-[350px] mx-auto">
      <Form {...form}>
        <CardTitle className="text-4xl my-5 text-center">Login</CardTitle>
        <CardContent>
          <form  onSubmit={form.handleSubmit(onSubmit)}>
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
                    <Input placeholder="password" type="password" autoComplete="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
      </Form>
    </Card>
  );
};

export default Login;
