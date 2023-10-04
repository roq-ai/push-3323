import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  contact: yup.string().nullable(),
  address: yup.string().nullable(),
  joined_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
