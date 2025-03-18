"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/service/api";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/slices/userSlice";
import { useRouter } from "next/navigation";

interface ILogin {
  username: string;
  password: string;
}

const Login = () => {
  const form = useForm<ILogin>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // UseMutation for login (triggers on form submit)
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success(data.message);
      console.log("Login response:", data);
     if(data.isSuccess) {
      dispatch(setUser(data.data))
      router.push("/")
     }
    },
    onError: (error: any) => {
      setErrorMsg(error.message || "Login failed");
    },
  });

  const handleLogin = (data: ILogin) => {
    if (!data.username || !data.password) {
      setErrorMsg("All fields are required");
      return;
    }
    setErrorMsg(""); // Clear errors before submitting
    mutation.mutate(data); // Trigger login API call
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-96"
      >
        <div className="text-4xl mb-6">Login</div>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(handleLogin)}>
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
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
                </FormItem>
              )}
            />
            {errorMsg && <div className="my-4 text-red-500 text-sm">{errorMsg}</div>}
            <Button className="cursor-pointer" size="sm" type="submit" disabled={mutation.isPending}>
  {mutation.isPending ? "Logging in..." : "Submit"}
</Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default Login;
