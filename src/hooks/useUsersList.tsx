import { useEffect, useState } from "react"
import { axiosClient } from "../ApiClient";


const useUsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosClient.get("/users")
            .then((response) => {
                setUsers(response?.data?.users)
            })
            .catch((error) => {
                return new Error(error.message);
            });
    },[]);
  return users;

};

export default useUsersList;