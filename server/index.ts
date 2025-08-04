import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // SSL validation route for PositiveSSL
  app.get("/.well-known/pki-validation/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(
      process.cwd(),
      "public",
      ".well-known",
      "pki-validation",
      filename,
    );
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(404).send("SSL validation file not found");
      }
    });
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
