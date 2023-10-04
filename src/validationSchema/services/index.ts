import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  service_type: yup.string().nullable(),
  price: yup.number().integer().nullable(),
  duration: yup.number().integer().nullable(),
  startup_id: yup.string().nullable().required(),
});
