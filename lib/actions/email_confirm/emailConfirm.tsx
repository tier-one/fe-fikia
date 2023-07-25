import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

const emailConfirm = async (token: string | null | undefined) => {
    const data = {
        hash: token,
    }
    try {
        const res = await API.post(`/api/v1/auth/email/confirm`, data);

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
        toast.error('An error occurred.', {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });

        throw error;
    }
}

export default emailConfirm;
