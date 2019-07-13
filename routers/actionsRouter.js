const router = require("express").Router();

const db = require("../data/helpers/actionModel");

router.get("/", async (req, res) => {
  try {
    const actions = await db.get();
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const action = await db.get(id);
    if (!action) {
      res.status(404).json({
        error: `action with id ${id} doesn't exist.`
      });
    } else {
      res.status(200).json(action);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/", async (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({
      error: "Please enter a project_id, description, and notes for the action."
    });
  } else {
    try {
      const action = await db.insert(req.body);
      res.status(201).json(action);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({
      error: "Please enter a project_id, description, and notes for the action."
    });
  } else {
    try {
      const action = await db.update(id, req.body);
      res.status(200).json(action);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const action = await db.remove(id);
    if (!action) {
      res.status(404).json({
        error: `Action with id ${id} doesn't exist.`
      });
    } else {
      res.status(200).json(action);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
