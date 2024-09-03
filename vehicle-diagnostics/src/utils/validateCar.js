const validateCar = async (year, make, model) => {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
    );
    const data = await response.json();
  
    if (data.Results && data.Results.length > 0) {
      const models = data.Results.map((result) => result.Model_Name.toLowerCase());
      return models.includes(model.toLowerCase());
    } else {
      return false;
    }
  };
  
  export default validateCar;
  