import axios from "axios";
import toast from "react-hot-toast";

export const addNewEmployee = async (employee) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: "/api/employes",
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { employee }  
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: Add new employee Failed");
    console.error(err);
  }
};