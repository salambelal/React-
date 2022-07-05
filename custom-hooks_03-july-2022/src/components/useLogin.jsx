import { createContext, useContext } from "react";
import { useState } from "react";


export default function useLogin(username, password) {
    const [message, setMessage] = useState('');
    const [flag, setFlag] = useState(false);
    const handelSubmit = (e) => {
        e.preventDefault();
        if (username == 'Lujain' && password == '123') {
            setMessage('successful');
            setFlag(true);
            
            
            
        }
        else
            setMessage('faild');
    }

    return [message, handelSubmit, flag];

}