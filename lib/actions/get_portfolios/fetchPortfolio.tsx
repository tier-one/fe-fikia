import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

interface CustomError extends Error {
    response?: {
      data: {
        message: string;
      };
    };
}

const fetchPoltfolios = async (token: string | undefined) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    try {
        const res = await API.get(`/api/v1/subscriptions/portfolio`, { headers });

        return res.data;
    } catch (error) {
        const customError = error as CustomError;

        if (customError.response && customError.response.data && customError.response.data.message) {
            const errorMessage = customError.response.data.message;

            toast.warn(errorMessage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        
        return [];
    }
}

export default fetchPoltfolios;
