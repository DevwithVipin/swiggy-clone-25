import {createContext} from "react";
const userContext =createContext(
  { user: {
        Name:"Vipin",
        Email:"vipinmishra00516"
    }
})
UserContext.displayName = "UserContext";
export default userContext;