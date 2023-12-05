import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

interface CustomError extends Error {
    response?: {
      data: {
        message: string;
      };
    };
}

const fetchFunds = async (token: string | undefined) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    try {
        const res = await API.get(`/api/v1/funds/get-all-funds`, { headers });
        
        return res.data;
    } catch (error) {
        const customError = error as CustomError;
        
        return {
            fund: []
        };
    }
}

export default fetchFunds;
