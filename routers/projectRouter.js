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

router

module.exports = router;
