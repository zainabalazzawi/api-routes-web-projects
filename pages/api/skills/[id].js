import skills from "../../../Data/Skills";

export default function (req, res) {
  const id = Number(req?.params?.id);
  const skill = skills.find((p) => p.id === id);
  res.json(skill);
}
