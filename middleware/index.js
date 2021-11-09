module.exports = {
  authenticate(req, res, next) {
    if (!req.headers.authorization) {
      return res.sendStatus(401);
    }
    req.user = 'some_user_id';
    next();
  },
};
