import Cors from "cors";
import skills from "../../Data/Skills";
import initMiddleware from "../../InitMiddleware/init-middleware";
// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default function (req, res) {
  cors(req, res);
  return res.status(200).json(skills);
}
