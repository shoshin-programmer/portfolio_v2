import blog_data from "../../../data/blog_data";

export default (req: any, res: any) => {
  const data = blog_data.filter((id) => id === id);
  return res.status(200).json(data[0]);
};
