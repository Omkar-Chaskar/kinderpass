import axios from "axios";
import toast from "react-hot-toast";

export const updateEmployee = async (employee ,_id) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: `/api/employes/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { employee }  
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: update employee Failed");
    console.error(err);
  }
};