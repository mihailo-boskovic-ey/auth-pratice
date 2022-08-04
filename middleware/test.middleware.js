exports.middle1 = (req, res, next) => {
  console.log("Comming from middleware 1");
  console.log(req.body);
  if (req.body.isError === true) next(new Error("Error Message"));
  else next();
};

exports.middle2 = (req, res, next) => {
  console.log("Comming from middleware 2");
  console.log(req.body);
  console.log("Error");
  //   console.log(err);
  next();
};
