import React, { useState } from 'react';
import CarInputForm from './components/CarInputForm';
import IframeContainer from './components/IframeContainer';
import Obd2Input from './components/Obd2Input';
import IssueDescription from './components/IssueDescription';
import './index.css';

function App() {
  const [car, setCar] = useState(null);
  const [obd2Code, setObd2Code] = useState('');
  const [description, setDescription] = useState('');

  const handleCarSubmit = (carInfo) => {
    setCar(carInfo);
  };

  const handleObd2Submit = (code) => {
    setObd2Code(code);
  };

  const handleDescriptionSubmit = (desc) => {
    setDescription(desc);
  };

  return (
    <div>
      <h1>Vehicle Diagnostics Assistant</h1>
      {!car && <CarInputForm onSubmit={handleCarSubmit} />}
      {car && (
        <>
          <Obd2Input onSubmit={handleObd2Submit} />
          <IssueDescription onSubmit={handleDescriptionSubmit} />
          <IframeContainer
            autozoneUrl={`https://www.autozone.com/country=USA&customerType=B2C&salesChannel=ECOMM&vehicleMakeName=${car.make}&vehicleModelName=${car.model}&vehicleYear=${car.year}&preview=false`}
            oreillyUrl={`https://www.oreillyauto.com/${car.make}/${car.model}/${car.year}`}
          />
        </>
      )}
    </div>
  );
}

export default App;
