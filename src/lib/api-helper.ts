export function extractUser(req) {
  if (!req.user) return null;
  const { _id, name, email, emailVerified } = req.user;
  return {
    _id,
    name,
    email,
    emailVerified
  };
}
