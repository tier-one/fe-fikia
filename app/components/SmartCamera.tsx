'use client';

import kycVerification from '@/lib/actions/KYC_Verification/kycVerification';
import React, { useEffect, useCallback } from 'react';
import { useSession } from "next-auth/react";

type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setKycError: React.Dispatch<React.SetStateAction<string>>,
  setKycSuccess: React.Dispatch<React.SetStateAction<string>>,
};

function SmartCamera({ setKycError, setKycSuccess, setIsLoading }: Props): JSX.Element {
  const {data: session} = useSession();
  const userId = session?.user?.id;
  

  const handleImagesComputed = useCallback(async (event: CustomEvent) => {
    try {
      setIsLoading(true);

      const results = await kycVerification(event.detail, userId);

      setKycSuccess('Succefully verified!')
    } catch (error) {
      setKycError('Error occured! please try again or contact the administrator')
    } finally {
      setIsLoading(false)
    }
  }, []);

  useEffect(() => {
    let app: HTMLElement | null = null;

    // Check if we are on the client-side (browser)
    if (typeof window !== 'undefined') {
      import('@smile_identity/smart-camera-web').then(() => {
        app = document.querySelector('smart-camera-web');
        if (app) {
          app.addEventListener('imagesComputed' as keyof ElementEventMap, handleImagesComputed as unknown as EventListenerOrEventListenerObject);
        }
      });
    }

    return () => {
      // Remove the event listener when the component is unmounted
      if (app) {
        app.removeEventListener('imagesComputed' as keyof ElementEventMap, handleImagesComputed as unknown as EventListenerOrEventListenerObject);
      }
    };
  }, [handleImagesComputed]);

  return (
    <div>
      <smart-camera-web capture-id></smart-camera-web>
    </div>
  );
}

export default SmartCamera;
