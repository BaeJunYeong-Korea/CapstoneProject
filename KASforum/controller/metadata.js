const express = require("express");
const Metadata = require("../model/metadata");
var router = express.Router();

// DBìì Metadata ê²ì
router.get("/searchMetadata", async (req, res) => {
  const id = req.body.id.replace(/^0x/, "");
  const doc = await Metadata.findById(id);

  res.json({
    tokenId: req.params.id,
    name: doc.name,
    kind: doc.kind,
    image: doc.image,
    description: doc.description,
  });
});

module.exports = router;
