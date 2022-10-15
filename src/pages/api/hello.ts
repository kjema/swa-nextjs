// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default withApiAuthRequired(function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const session = getSession(req, res);
  res.status(200).json({ name: session?.user.name || "Anonymous" });
});
