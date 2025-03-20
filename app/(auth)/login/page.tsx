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
import { googleLogin, login } from "@/service/api";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "@/app/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { setUserSettings } from "@/app/redux/slices/userSettingsSlice";

interface ILogin {
  email: string;
  password: string;
}

interface GoogleUser {
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
}

const formSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string(),
});

const Login = () => {
  const form = useForm<ILogin>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // UseMutation for login (triggers on form submit)
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success(data.message);
      if (data.isSuccess) {
        dispatch(setUser(data.data.user));
        dispatch(setUserSettings(data.data.userSettings))
        router.push("/");
      }
    },
    onError: (error: any) => {
      setErrorMsg(error.message || "Login failed");
    },
  });

  const googleMutation = useMutation({
    mutationFn: googleLogin,
    onSuccess: (data) => {
      if (data.isSuccess) {
        toast.success(data.message);
        dispatch(setUser(data.data.user))
        dispatch(setUserSettings(data.data.userSettings))
        router.push("/");
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleLogin = (data: ILogin) => {
    if (!data.email || !data.password) {
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
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  {/* @ts-ignore */}
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.email?.message}
                  </p>
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
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {errorMsg && (
              <div className="my-4 text-red-500 text-sm">{errorMsg}</div>
            )}
            <div className="text-right">
              <span className="cursor-pointer hover:underline text-sm text-gray-400">
                Forgot Password?
              </span>
            </div>
            <Button
              className="cursor-pointer w-full py-2"
              size="sm"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Logging in..." : "Submit"}
            </Button>
          </form>
        </Form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-500"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>
        <div className="w-full flex justify-center">
          <GoogleLogin
            onSuccess={(credentialRes) => {
              const { email, given_name, family_name, picture } =
                jwtDecode<GoogleUser>(credentialRes.credential || "");
              googleMutation.mutate({
                email,
                given_name,
                family_name,
                picture,
              });
            }}
            onError={() => {
              console.log("Failed to Login");
              toast.error("Failed to login");
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
