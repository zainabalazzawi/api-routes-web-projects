const projects = require("../../data/Projects");

export default function (req, res) {
  return res.status(200).json(projects);
}
