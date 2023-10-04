import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  name: yup.string().required(),
  position: yup.string().nullable(),
  joined_date: yup.date().nullable(),
  experience: yup.number().integer().nullable(),
  qualification: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
