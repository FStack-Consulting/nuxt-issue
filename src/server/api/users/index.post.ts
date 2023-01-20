import User from "../../dbModels/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = await User.create({
    email: body.email,
    verification: "pending",
    rememberMe: body.rememberMe,
    role: "free-user",
    projectIds: [],
    password: body.password,
    name: body.name,
  });
  return {
    user,
  };
});
