import Cors from "cors";
import initMiddleware from "../../InitMiddleware/init-middleware";
const projects = require("../../data/Projects");
// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default function (req, res) {
  cors(req, res);
  return res.status(200).json(projects);
}
