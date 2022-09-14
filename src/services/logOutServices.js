import toast from "react-hot-toast";

export const logOutServices = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("email");
    toast("Logout successfull")
  };
  