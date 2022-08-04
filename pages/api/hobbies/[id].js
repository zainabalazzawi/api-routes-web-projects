import hobbies from "../../../Data/Hobbies";

export default function (req, res) {
  const id = Number(req?.params?.id);
  const hobby = hobbies.find((p) => p.id === id);
  res.json(hobby);
}
