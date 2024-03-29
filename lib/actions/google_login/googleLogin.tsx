import API from "@/utils/apiCall";

const googleLogin = async (name: string | null | undefined, email: string | null | undefined) => {
    const data = {
        firstName: name?.split(' ')[0],
        lastName: name?.split(' ')[1],
        email
    }
    try {
        const res = await API.post(`/api/v1/auth/googleUser/register`, data);

        return res.data;
    } catch (error) {
        throw error;
    }
};

export default googleLogin;
