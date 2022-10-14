export const validateEmail = email => {
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
  return email.match(mailformat);
}

export const validatePassword = password => {
    return password && password.length >= 8;
}
