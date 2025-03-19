import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, useCallback } from "react";
import { Eye, EyeOff } from "lucide-react";
import PasswordIndicator from "@/components/passwordIndicator/page";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "@/service/api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { RootState } from "../redux/store/store";
import { IUser } from "@/utils/types";

const ChangePassword = () => {
  const userState = useSelector((state: RootState) => state.user.user as IUser);
  const dispatch = useDispatch();

  const passwordMutation = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      if (data.isSuccess) {
        toast.success(data.message);
        dispatch(setUser(data.data));
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const defaultState = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [passwordState, setPasswordState] = useState(defaultState);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [isValidNewPassword, setIsValidNewPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Handle input change
  const handleInputChange = (field: keyof typeof passwordState, value: string) => {
    setPasswordState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle password change submission
  const handleChangePassword = useCallback(() => {
    const { currentPassword, newPassword, confirmPassword } = passwordState;

    if (!currentPassword) return toast.error("Enter your current password.");
    if (!isValidNewPassword) return toast.error("New password is not valid.");
    if (!confirmPassword) return toast.error("Enter confirm password.");
    if (confirmPassword !== newPassword) return toast.error("New and confirm password do not match.");

    passwordMutation.mutate({ userId: userState._id, currentPassword, newPassword });

    setPasswordState(defaultState);
    setShowPassword({ currentPassword: false, newPassword: false, confirmPassword: false });
  }, [passwordState, isValidNewPassword, passwordMutation, userState._id]);

  return (
    <div>
      <div className="mb-4 font-semibold text-lg">Change Password</div>
      <div className="space-y-6">
        {["currentPassword", "newPassword", "confirmPassword"].map((field) => (
          <div key={field} className="relative">
            <label className="text-sm capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
            <div className="relative">
              <Input
                type={showPassword[field as keyof typeof showPassword] ? "text" : "password"}
                value={passwordState[field as keyof typeof passwordState]}
                onChange={(e) => handleInputChange(field as keyof typeof passwordState, e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => togglePasswordVisibility(field as keyof typeof showPassword)}
              >
                {showPassword[field as keyof typeof showPassword] ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        ))}

        <PasswordIndicator password={passwordState.newPassword} isValid={setIsValidNewPassword} />

        <Button size="sm" className="cursor-pointer" onClick={handleChangePassword}>
          Change
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
