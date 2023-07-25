import { BankInfoForm, ProjectForm } from "@/common.types";
import API from "@/utils/apiCall";

const isProduction = process.env.NODE_ENV === 'production';

const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

export const uploadImage = async (imagePath: string) => {
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: 'POST',
            body: JSON.stringify({ path: imagePath })
        })

        return response.json();
    } catch (error) {
        throw error;
    }
}

const uploadBankIfo = async (form: BankInfoForm, token: string | undefined) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    try {
        const res = await API.post(`/api/v1/bank-details`, form, { headers });
        
        return res.data;
    } catch (error) {
        return error;
    }
}

export const updateProfile = async (form: ProjectForm, userId: string | undefined, token: string | undefined) => {
    try {
        const signatureImageUrl = await uploadImage(form.firstApplicantSignatureImage);
        const idImageUrl = await uploadImage(form.governmentIdImage);
        const nextOfKeenImageUrl = await uploadImage(form.nextOfKeenImage);

        const bankDatas = {
            name: form.name,
            branchName: form.branchName,
            accountNumber: form.accountNumber,
            swiftCode: form.swiftCode,
        }

        const bankDetailsInfo = await uploadBankIfo(bankDatas, token)
        

        if(signatureImageUrl.url && idImageUrl.url && nextOfKeenImageUrl.url && bankDetailsInfo) {
            const headers = {
                'Authorization': `Bearer ${token}`,
            };
            const data = {
                firstName: form.firstName,
                middleName: form.middleName,
                lastName: form.lastName,
                dateOfBirth: form.dateOfBirth,
                phoneNumber: form.phoneNumber,
                governmentId: form.governmentId,
                governmentIdImage: idImageUrl.url,
                firstApplicantSignatureImage: signatureImageUrl.url,
                nextOfKeenImage: nextOfKeenImageUrl.url,
                residence: form.residence,
                occupation: form.occupation,
                sourceOfFunds: form.sourceOfFunds,
                bankDetails: bankDetailsInfo.id,

            }

            const res = await API.patch(`/api/v1/users/${userId}`, data, { headers });

            console.log(res.data, 'this this is the return after update');
        
        
            return res.data;
        }
    } catch (error) {
        throw error;
    }
}