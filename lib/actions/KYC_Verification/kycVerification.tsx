import API from "@/utils/apiCall";

const kycVerification = async (data: string | null | undefined) => {
    try {
        const res = await API.post(`/api/kyc-verification`, data);
        console.log(res, 'This is the returned data after verification');
        

        return res.data;
    } catch (error) {
        throw error;
    }
};

export default kycVerification;
