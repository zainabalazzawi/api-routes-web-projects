import projects from "../../../Data/Projects";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  const id = Number(req?.params?.id);
  const project = projects.find((p) => p.id === id);
  res.json(project);
}
