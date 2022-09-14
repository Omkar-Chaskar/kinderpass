export function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case "SET_FIRsTNAME":
        return { ...state, firstname: payload };
      case "SET_LASTNAME":
        return { ...state, lastname: payload };
      case "SET_ADDRESS":
        return { ...state, address: payload };
      case "SET_CITY":
        return { ...state, city: payload };
      case "SET_DOB":
        return { ...state, dateofbirth: payload };
      case "SET_NUMBER":
        return { ...state, number: payload };
      case "EDIT_EMPLOYEE":
        return { ...payload };
      case "CLEAR_EMPLOYEE":
        return {
            firstname: "",
            lastname: "",
            address: "",
            city: "",
            dateofbirth: "",
            number: ""
        };
      default:
        return state;
    }
  }