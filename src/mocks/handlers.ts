import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ data: { token: "Hola" } }))
  ),
];
