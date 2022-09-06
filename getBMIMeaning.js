const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return (weight) / (height * height)
}
function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height)
  if (bmi < 18.5){
    result = 'Underweight'
  } else if (bmi > 25.0){
    result = 'Overweight'
  } else {
    result = 'Normal weight'
  }
  return result
}
module.exports = getBMIMeaning
