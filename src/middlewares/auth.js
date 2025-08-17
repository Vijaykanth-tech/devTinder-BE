const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAutherized = token === "xyjz";
  if (!isAutherized) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
const userAuth = (req, res, next) => {
  const token = "userToken";
  const isAutherized = token === "userToken";
  if (!isAutherized) {
    return res.status(401).json({ error: "unauthorized" });
  }
  next();
};
module.exports = { adminAuth, userAuth };
