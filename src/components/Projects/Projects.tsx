import { useEffect, useState } from "react";
import { IRepo } from "../../models/IRepo";
import { Project } from "../Project/Project";
import { getRepos } from "../services/repoService";
import "../Project/Project.scss";

export const Projects = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);

  useEffect(() => {
    const getData = async () => {
      let myRepos = await getRepos();
      setRepos(myRepos);
    };
    if (repos.length > 0) return;
    getData();
  });

  // const handleRepos = () => {
  //   let newRepoList: Repo[] = repos.map((repo: IRepo) => {
  //     return new Repo(
  //       repo.name,
  //       repo.clone_url,
  //       repo.description,
  //       repo.created_at,
  //       repo.topics
  //     );
  //   });
  //   showRepos(newRepoList);
  // };

  let showRepos = repos.map((repo: IRepo, i) => {
    if (repo.description !== null) {
      return <Project key={i} project={repo}></Project>;
    }
  });

  return <main className="projects">{showRepos}</main>;
};
