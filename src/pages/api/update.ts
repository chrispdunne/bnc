import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { runMiddleware } from "@/utils/middleware";

const cors = Cors({
    methods: ["GET", "OPTIONS", "HEAD", "POST"],
    origin: process.env.NEXT_PUBLIC_ALLOWED_ORIGINS?.split(" "),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, cors);

    // Check for secret to confirm this is a valid request
    if (!req.query?.secret) {
        return res.status(401).json({ message: "No token provided" });
    }
    if (req.query.secret === process.env.STATIC_SECRET_TOKEN) {
        try {
            // get page path from query, remove everythinthing except a-z, -, _ and /
            const pagePath =
                req.query.page != null
                    ? String(req.query.page).replace(/[^(a-z|\-|_|\/)]/g, "")
                    : null;

            if (pagePath === "home") {
                await res.revalidate("/");
            } else {
                await res.revalidate(`/${pagePath}`);
            }

            return res.json({ revalidated: pagePath });
        } catch (err) {
            // If there was an error, Next.js will continue
            // to show the last successfully generated page
            return res.status(500).send("Error revalidating");
        }
    } else {
        return res.status(401).json({ message: "Invalid token" });
    }
}
