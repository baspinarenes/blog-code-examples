import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Registration: React.FC<RegistrationProps> = ({ isRegistered }) => {
  return isRegistered ? <LoginForm /> : <RegisterForm />;
};

export interface RegistrationProps {
  isRegistered: boolean;
}

export default Registration;
