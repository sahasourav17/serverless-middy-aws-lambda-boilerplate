const Validator = require("validatorjs");

exports.validate = (data, rules, messages) => {
  const validation = new Validator(data, rules, messages);

  if (validation.fails()) {
    throw Object.assign(new Error(), {
      status: 400,
      data: {
        errors: {
          "invalid-params": validation.errors.all()
        }
      },
      error: {
        code: 40001,
        data: {
          "invalid-params": validation.errors.all()
        }
      }
    });
  }

  return validation.passes();
};
