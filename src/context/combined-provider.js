import React from "react";
import {
  AuthProvider, EmployesProvider
} from "../context";

const CombinedProvider = ({ children }) => {
  return (
    <EmployesProvider>
      <AuthProvider>{children}</AuthProvider>
    </EmployesProvider>
  );
};
export { CombinedProvider };
