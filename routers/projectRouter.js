const router = require("express").Router();

const db = require("../data/helpers/projectModel");

router.get("/", async (req, res) => {
  try {
    const projects = await db.get();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db.get(id);
    if (!project) {
      res.status(404).json({
        error: `Project with id ${id} doesn't exist.`
      });
    } else {
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id/actions", async (req, res) => {
  const { id } = req.params;
  try {
    const projectActions = await db.getProjectActions(id);
    if (!projectActions) {
      res.status(404).json({
        error: `Project with id ${id} doesn't exist.`
      });
    } else {
      res.status(200).json(projectActions);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({
      error: "Please enter a name and a description for the project."
    });
  } else {
    try {
      const project = await db.insert(req.body);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
});

module.exports = router;
