import React, { useState } from "react";
import ApplicationDetailsSection from "./ApplicationDetailsSection";
import DeclarationSection from "./DeclarationSection";
import DocumentationSection from "./DocumentationSection";


type Props = {
  handleLastBack: () => void;
  individualSelection: number;
  setIndividualSelection: React.Dispatch<React.SetStateAction<number>>;
}

const Individual = ({ handleLastBack, individualSelection, setIndividualSelection}: Props) => {

  const handleContinue = () => {
    setIndividualSelection(individualSelection + 1);
  };

  const handleBack = () => {
    setIndividualSelection(individualSelection - 1);
  };

  return (
    <>
      <ApplicationDetailsSection
        handleContinue={handleContinue}
        visible={individualSelection === 1}
        handleBack={handleBack}
        handleLastBack={handleLastBack}
      />
      <DocumentationSection
        handleContinue={handleContinue}
        visible={individualSelection === 2}
        handleBack={handleBack}
      />
      <DeclarationSection
        handleContinue={handleContinue}
        visible={individualSelection === 3}
        handleBack={handleBack}
      />
    </>
  );
};

export default Individual;
