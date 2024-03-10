import { useEffect, useState } from "react"
import { axiosClient } from "../ApiClient";


const useFetchList = (baseUrl: string, subject:string | number) => {
    const [currentState, setCurrentState] = useState(null);

    useEffect(() => {
        axiosClient.get(`/${subject}`)
            .then((response) => {
                setCurrentState(response?.data)
            })
            .catch((error) => {
                return new Error(error.message);
            });
    },[baseUrl, subject]);
  return currentState ? currentState[subject] : [];
}

export default useFetchList;