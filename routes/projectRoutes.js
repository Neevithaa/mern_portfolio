import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", async (req, res) => {
  const project = new Project(req.body);
  const saved = await project.save();
  res.json(saved);
});

router.post("/projects", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});


export default router;
