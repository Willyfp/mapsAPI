import * as yup from 'yup';

const schemaComsumption = yup.object().shape({
  comsumption: yup.string().required('Campo obrigatório'),
  fuelValue: yup.string().required('Campo obrigatório'),
});

export default schemaComsumption;
