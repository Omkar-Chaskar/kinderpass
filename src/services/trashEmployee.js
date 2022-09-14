import axios from "axios";
import toast from "react-hot-toast";

export const trashEmployee = async (employee , _id) => {
  try {
    const { data, status } = await axios({
      method: "delete",
      url: `/api/employes/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { employee }  
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: Remove employee Failed");
    console.error(err);
  }
};