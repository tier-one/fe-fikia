'use client';

import React, { useState } from "react";
import Corporate from "../../components/Corporate";
import DeclarationCard from "../../components/declaration-card";
import Individual from "../../components/Individual";
import OptionsSection from "../../components/OptionSection";

const options = [
  'Individual' ,
  'Corporate',
]

const Application = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [individualSelection, setIndividualSelection] = useState(1);
  const [corporateSelection, setCorporateSelection] = useState(1);
  const [selected, setSelected] = useState('Select option');

  const handleContinue = () => {
    if (selected === 'Individual' || selected === 'Corporate') {
      setCurrentSection(2)
    }
  };

  const handleLastBack = () => {
    setCurrentSection(1);
    setSelected('Select option')
  };

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden flex flex-row items-start justify-start text-left text-[18px] text-slate-600">
      <DeclarationCard individualSelection={individualSelection} corporateSelection={corporateSelection}/>
      <div className="self-stretch flex-1 relative bg-white ">
        <OptionsSection selected={selected} setSelected={setSelected} options={options} handleContinue={handleContinue} visible={currentSection === 1} />

        {selected === 'Individual' && currentSection === 2 && (
          <Individual handleLastBack={handleLastBack} individualSelection={individualSelection} setIndividualSelection={setIndividualSelection} />
        )}
        
        {selected === 'Corporate' && currentSection === 2 && (
          <Corporate handleLastBack={handleLastBack} corporateSelection={corporateSelection} setCorporateSelection={setCorporateSelection} />
        )}

      </div>
    </div>
  );
};

export default Application;
