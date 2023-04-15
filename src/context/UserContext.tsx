
import { User } from "firebase/auth";
import { createContext, useContext  } from "react";

type UserContextType={currentUser:null | User}

const UserContext = createContext<UserContextType>(
    {currentUser:null}
);

export default UserContext;