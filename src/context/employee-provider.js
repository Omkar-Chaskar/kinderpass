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
          console.error(err);
        }
      })();
    }, [employes]);
  
    const addNewEmployeeHandler = async (employee) => {
      const { data, status } = await addNewEmployee(employee);
      if (status === 201) {
        setEmployes(data.employes);
        navigateTo("/");
        toast("Employee Added Succesfully");
      }
    };

    const updateEmployeeHandler = async (employee, _id) => {
      const { data, status } = await updateEmployee(employee, _id);
      if (status === 201) {
        setEmployes(data.employes);
        navigateTo("/");
        toast("Employee Updated Succesfully");
      }
    };

    const trashEmployeeHandler = async (employee , _id) => {
        const { data, status } = await trashEmployee(employee , _id);
        if (status === 200) {
          setEmployes(data.employes);
          navigateTo("/");
          toast("Employee Removed Succesfully");
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