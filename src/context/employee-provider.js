import { createContext, useContext, useReducer , useEffect, useState} from "react"
import {reducer} from "../reducer/addEmployeeReducer";
import axios from "axios";
import { addNewEmployee, updateEmployee, trashEmployee} from "../services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EmployesContext = createContext()

const EmployesProvider = ({children}) => {
  const navigateTo = useNavigate();
  const [employes , setEmployes] = useState([]);
    const [state , dispatch] = useReducer(reducer , {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      dateofbirth: "",
      number: ""
    })

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios({
            method: "get",
            url: "/api/employes",
            headers: { authorization: localStorage.getItem("auth_token") }
          });
          setEmployes(data.employes)
        } catch (err) {
          toast("Something went wrong: Loading Employee Data Failed");
          console.error(err);
        }
      })();
    }, [employes]);
  
    const addNewEmployeeHandler = async (employee) => {
      const { data, status } = await addNewEmployee(employee);
      if (status === 201) {
        setEmployes(data.employes);
        navigateTo("/");
      }
    };

    const updateEmployeeHandler = async (employee, _id) => {
      const { data, status } = await updateEmployee(employee, _id);
      if (status === 201) {
        setEmployes(data.employes);
        navigateTo("/");
      }
    };

    const trashEmployeeHandler = async (employee , _id) => {
        const { data, status } = await trashEmployee(employee , _id);
        if (status === 201) {
          setEmployes(data.employes);
          navigateTo("/");
        }
      };

    return (
      <EmployesContext.Provider
        value={{employes, state ,dispatch ,addNewEmployeeHandler ,updateEmployeeHandler ,trashEmployeeHandler}}
      >
        {children}
      </EmployesContext.Provider>
    );
}

const useEmployes = () => useContext(EmployesContext)
export {EmployesProvider,useEmployes}