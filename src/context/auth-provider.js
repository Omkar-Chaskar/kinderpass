import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInServices, signUpServices, logOutServices } from "../services";
import toast from "react-hot-toast";

const AuthContext = createContext();
const token = JSON.parse(localStorage.getItem("auth_token"));
const email = JSON.parse(localStorage.getItem("email"));
const firstname = JSON.parse(localStorage.getItem("firstname"));
const lastname = JSON.parse(localStorage.getItem("lastname"));
const company = JSON.parse(localStorage.getItem("company"));
const address = JSON.parse(localStorage.getItem("address"));
const dateofbirth = JSON.parse(localStorage.getItem("dateofbirth"));

const inititalAuthStateValue = {
  loginStatus: token ? true : false,
  authenticationToken: token,
  email: email,
  firstname : firstname,
  lastname: lastname,
  company: company,
  address: address,
  dateofbirth: dateofbirth
};

const AuthProvider = ({ children }) => {
  const navigateTo = useNavigate();
  const [user, setUser] = useState(inititalAuthStateValue);

  const signUpHandler = async (signUpData) => {
    const { data, status } = await signUpServices(signUpData);
    if (status === 201) {
      localStorage.setItem("auth_token", JSON.stringify(data.encodedToken));
      localStorage.setItem(
        "firstname",
        JSON.stringify(data.createdUser.firstName)
      );
      localStorage.setItem(
        "lastname",
        JSON.stringify(data.createdUser.lastName)
      );
      localStorage.setItem(
        "company",
        JSON.stringify(data.createdUser.company)
      );
      localStorage.setItem(
        "address",
        JSON.stringify(data.createdUser.address)
      );
      localStorage.setItem(
        "dateofbirth",
        JSON.stringify(data.createdUser.dateofbirth)
      );
      localStorage.setItem("email", JSON.stringify(data.createdUser.email));
      setUser({
        loginStatus: true,
        authenticationToken: data.encodedToken,
        firstname: data.createdUser.firstName,
        lastname: data.createdUser.lastName,
        email: data.createdUser.email,
        company: data.createdUser.company,
        address: data.createdUser.address,
        dateofbirth: data.createdUser.dateofbirth

      });
      toast("Successfully loggedIn");
      navigateTo("/");
    } else {
      toast("Could not complete the request");
    }
  };

  const logInHandler = async (logInData) => {
    if (logInData.email === "" && logInData.password === "") {
      toast("fill the fields");
    } else {
      const { data, status } = await logInServices(logInData);
      if (status === 200) {
        localStorage.setItem("auth_token", JSON.stringify(data.encodedToken));
        localStorage.setItem(
          "firstname",
          JSON.stringify(data.foundUser.firstName)
        );
        localStorage.setItem(
          "lastname",
          JSON.stringify(data.foundUser.lastName)
        );
        localStorage.setItem(
          "company",
          JSON.stringify(data.foundUser.company)
        );
        localStorage.setItem(
          "address",
          JSON.stringify(data.foundUser.address)
        );
        localStorage.setItem(
          "dateofbirth",
          JSON.stringify(data.foundUser.dateofbirth)
        );
        localStorage.setItem("email", JSON.stringify(data.foundUser.email));
        setUser({
          loginStatus: true,
          authenticationToken: data.encodedToken,
          email: data.foundUser.email,
          firstname: data.foundUser.firstName,
          lastname: data.foundUser.lastName,
          company: data.foundUser.company,
          address: data.foundUser.address,
          dateofbirth: data.foundUser.dateofbirth
        });
        toast("Successfully loggedIn");

        navigateTo("/");
      } else {
        toast("could not complete the request");
      }
    }
  };

  const logOutHandler = () => {
    logOutServices();
    setUser({ loginStatus: false });
    toast("Logged out successfully");
    navigateTo("/");
  };

  return (
    <AuthContext.Provider
      value={{ signUpHandler, logInHandler, logOutHandler, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
