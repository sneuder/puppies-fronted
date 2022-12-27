const regexString = /^[a-zA-Z-()]+$/;
const regexNum = /^\d+$/;

const validateForm = (validation, dogFormData) => {
  validateAttrs(validation, dogFormData);
  validateProps(validation, dogFormData);
  validateMeasure(validation, dogFormData);
};

function validateProps(validation, dogFormData) {
  const propsToCheck = ['name', 'bred_for'];

  propsToCheck.forEach((toCheck) => {
    if (regexString.test(dogFormData[toCheck])) return;
    if (dogFormData[toCheck] === '') {
      return (validation[toCheck] = 'Complete this field');
    }
    validation[toCheck] = 'Numbers and symbols not allowed';
  });
}

function validateAttrs(validation, dogFormData) {
  const attrToCheck = ['countries', 'temps', 'breeds'];
  const propsToCheck = ['breeds'];

  attrToCheck.forEach((toCheck) => {
    if (dogFormData.attributes[toCheck].length === 0) return;
    if (dogFormData.attributes[toCheck].some((item) => regexString.test(item)))
      return;
    validation[toCheck] = 'Numbers and symbols not allowed';
  });

  propsToCheck.forEach((toCheck) => {
    if (regexString.test(dogFormData.attributes[toCheck][0])) return;
    if (dogFormData.attributes[toCheck][0] === '') {
      return (validation[toCheck] = 'Complete this field');
    }
    validation[toCheck] = 'Numbers and symbols not allowed';
  });
}

function validateMeasure(validation, dogFormData) {
  const measureToCheck = ['lifeSpan', 'weight'];

  measureToCheck.forEach((toCheck) => {
    const from = dogFormData[toCheck].from;
    const to = dogFormData[toCheck].to;

    if (regexNum.test(from) && regexNum.test(to)) {
      if (from <= to) return;
      return (validation[toCheck] = 'From is higher than To');
    }

    if (from === '' || to === '')
      return (validation[toCheck] = 'Complete this field');

    validation[toCheck] = 'Symbols and characters not allowed';
  });
}

export default validateForm;
