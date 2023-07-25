import API from "@/utils/apiCall";
import { toast } from 'react-toastify';


interface CustomError extends Error {
    response?: {
      data: {
        error: string
      };
    };
}

const addToWaitList = async (email: string) => {
    const data = {
        email: email,
    }
    try {
        const res = await API.post(`/api/v1/waitList`, data);

        toast.success(res.data.message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });

        return res.data;
    } catch (error) {
        return error
    }
}

export default addToWaitList;
