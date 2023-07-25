'use client';

import kycVerification from '@/lib/actions/KYC_Verification/kycVerification';
import React, { useEffect, useCallback } from 'react';

function SmartCamera(): JSX.Element {
  const handleImagesComputed = useCallback((event: CustomEvent) => {
    console.log('Capture event:', event.detail);
    kycVerification(event.detail)
  }, []);

  useEffect(() => {
    let app: HTMLElement | null = null;

    // Check if we are on the client-side (browser)
    if (typeof window !== 'undefined') {
      import('@smile_identity/smart-camera-web').then(() => {
        app = document.querySelector('smart-camera-web');
        if (app) {
          app.addEventListener('imagesComputed' as keyof ElementEventMap, handleImagesComputed as EventListenerOrEventListenerObject);
        }
      });
    }

    return () => {
      // Remove the event listener when the component is unmounted
      if (app) {
        app.removeEventListener('imagesComputed' as keyof ElementEventMap, handleImagesComputed as EventListenerOrEventListenerObject);
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
