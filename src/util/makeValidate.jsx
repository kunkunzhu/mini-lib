import { set, get } from "lodash";

export function makeValidate(validator) {
    
  return async (values) => {
    try {
      await validator.validate(values, { abortEarly: false });
    } catch (err) {
      return err.inner.reduce((errors, { path, message }) => {
        if (errors.path) {
          set(errors, path, `${get(errors, path)} ${message}`);
        } else {
          set(errors, path, message);
        }

        return errors;
      }, {});
    }
  };
}
