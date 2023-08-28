import React, { useState } from 'react'
import CorporateDeclarationSection from './CorporateDeclarationSection';
import CorporateDetailSection from './CorporateDetailSection'
import CorporateDocumentationSection from './CorporateDocumentationSection';

type Props = {
  handleLastBack: () => void;
  corporateSelection: number;
  setCorporateSelection: React.Dispatch<React.SetStateAction<number>>;
}

const Corporate = ({ handleLastBack, corporateSelection, setCorporateSelection }: Props) => {

  const handleContinue = () => {
    setCorporateSelection(corporateSelection + 1);
  };

  const handleBack = () => {
    setCorporateSelection(corporateSelection - 1);
  };

  return (
    <>
      <CorporateDetailSection 
        handleContinue={handleContinue}
        visible={corporateSelection === 1}
        handleBack={handleBack}
        handleLastBack={handleLastBack}
      />

      <CorporateDocumentationSection 
        handleContinue={handleContinue}
        visible={corporateSelection === 2}
        handleBack={handleBack}
      />

      <CorporateDeclarationSection 
        handleContinue={handleContinue}
        visible={corporateSelection === 3}
        handleBack={handleBack}
      />
    </>
  )
}

export default Corporate