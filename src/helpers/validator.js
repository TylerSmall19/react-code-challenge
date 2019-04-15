const validate = (vals) => {
  for(const name in vals) {
    if (vals[name] === '')
      return error();
  }

  return success();
}

const success = () => ({success: true});
const error = () => ({success: false, message: 'Invalid login info.'})

export const Validator = {
  validate
}