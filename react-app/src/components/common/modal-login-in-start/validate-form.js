export const required = value => value ? undefined : 'Это обязательно';

 const maxMinLength = (min, max) => value =>
  value && (value.length+1 <= min || value.length+1 >= max) ? `Must be max-${max} and min-${min} characters ` : undefined

export const maxLength_3_25 = maxMinLength(3, 25)
export const maxLength_2_100 = maxMinLength(2, 100)

 const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15);







