"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import PasswordIndicator from "@/components/passwordIndicator/page";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/service/api";

// ✅ Zod Schema for Form Validation
const formSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  middlename: z.string().min(1, "Middle name is required"),
  lastname: z.string().min(1, "Last name is required"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain one special character"),
  confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// ✅ TypeScript Interface
type ILogin = z.infer<typeof formSchema>;

const Login = () => {
  const form = useForm<ILogin>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      if (response.isSuccess) {
        toast.success(response.message || "Account Registered");
        form.reset();
      } else {
        toast.error(response.message || "Registration failed");
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "Registration failed");
    },
  });

  return (
    <div className="h-full my-10 w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" w-96 py-2"
      >
        <div className="text-4xl mb-6">Register</div>
        <Form {...form}>
          {/* @ts-ignore */}
          <form className="space-y-6" onSubmit={form.handleSubmit(mutation.mutate)}>
            {["firstname", "middlename", "lastname", "email", "username"].map((fieldname) => (
              <FormField
                key={fieldname}
                name={fieldname as keyof ILogin}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={`Enter ${fieldname}`} {...field} />
                    </FormControl>
                    {/* @ts-ignore */}
                    <p className="text-red-500 text-sm">{form.formState.errors[fieldname]?.message}</p>
                  </FormItem>
                )}
              />
            ))}

            {/* Password Field */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </FormControl>
                  <p className="text-red-500 text-sm">{form.formState.errors.password?.message}</p>
                </FormItem>
              )}
            />

            {/* Password Strength Indicator */}
            <PasswordIndicator password={form.watch("password")} isValid={null} />

            {/* Confirm Password Field */}
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </FormControl>
                  <p className="text-red-500 text-sm">{form.formState.errors.confirmPassword?.message}</p>
                </FormItem>
              )}
            />

            <Button
              className="cursor-pointer"
              size="sm"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default Login;
