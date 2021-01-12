import project_list from "../../../data/project_list";

// export default (req: any, res: any) => {
//   res.status(200).json(project_list);
// };

import type { NextApiRequest, NextApiResponse } from "next";
interface Link {
  name: string;
  url: string;
}
interface Project {
  title: string;
  subtitle: string;
  year: string;
  links: Link[];
}
interface ProjectList {
  projects: Project[];
}

export default (req: NextApiRequest, res: NextApiResponse<ProjectList>) => {
  res.status(200).json({ projects: project_list });
};
