'use client';

'use client';

import AllFunds from '@/app/components/AllFunds';
import fetchFunds from '@/lib/actions/get_fund/fetchFunds';
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";

const Funds = () => {
  const { data: session } = useSession();
  const [funds, setFunds] = useState<any>([]);
  const token = session?.user?.token;

  useEffect(() => {
    fetchAllFunds();
  }, [token])

  const fetchAllFunds = async () => {
    if (token) {
      const response = await fetchFunds(token);
    
      setFunds(response.fund)
    }
  }

  const allFunds = funds?.map((fund: { fund: { 
    id: any;
    createdAt: string;
    FundLogo: string;
    FundName: string;
    FundSymbol: string;
    FundGoal: string;
    CustodianParcentage: string;
    TrustPercentage: string;
  }; }) => {
    return {
      "id": `${fund?.fund?.id}`,
      "fundLogo": `${fund?.fund?.FundLogo}`,
      "fundName": `${fund?.fund?.FundName}`,
      "fundSymbol": `${fund?.fund?.FundSymbol}`,
      "FundGoal": `${fund?.fund?.FundGoal}`,
      "lunchedDate": `${fund?.fund?.createdAt?.split('T')[0]}`,
      "CustodianParcentage": `${fund?.fund?.CustodianParcentage}%`,
      "TrustPercentage": `${fund?.fund?.TrustPercentage}%`
    }
  });

  return (
    <div className='flex w-full min-h-[88vh] px-[20px] bg-[#E1E7EF]'>
      <AllFunds allFunds={allFunds} />
    </div>
  )
}

export default Funds