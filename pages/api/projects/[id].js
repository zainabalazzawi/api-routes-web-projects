import projects from "../../../data/Projects";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  const id = Number(req.params.id);
  const project = projects.find((p) => p.id === id);
  if (project) {
    res.json(project);
    //Need to know why it doesn't work?
  } else {
    res
      .status(400)
      .json({ message: `that project doesn't exist ${req.params.id}` });
  }
}
