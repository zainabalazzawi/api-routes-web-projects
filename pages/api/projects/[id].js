import projects from "../../../data/Projects";

export default function ({ query: { id } }, res) {
  const project = projects.find((p) => p.id === id);

  res.status(200).json(project);
}
