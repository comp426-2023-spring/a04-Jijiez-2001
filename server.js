#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import { rps, rpsls } from "./lib/rpsls.js";

const args = minimist(process.argv.slice(2));
const port = args["port"] || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * /app/ -> 200 OK
 */
app.get("/app/", (req, res) => res.status(200).send("200 OK"));

/**
 * /app/rps/
 */
app.get("/app/rps/", (req, res) =>
  res.json({ player: "(rock|paper|scissors)" })
);

/**
 * /app/rpsls
 */
app.get("/app/rpsls/", (req, res) =>
  res.json({ player: "(rock|paper|scissors|lizard|spock)" })
);

/**
 *
 */
