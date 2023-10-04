import * as yup from 'yup';

export const startupValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  founded_date: yup.date().nullable(),
  industry: yup.string().nullable(),
  location: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
