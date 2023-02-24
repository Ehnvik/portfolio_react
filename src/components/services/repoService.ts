import axios from "axios";
import { IRepo } from "../../models/IRepo";

export const getRepos = async () => {
  let response = await axios.get<IRepo[]>(
    "https://api.github.com/users/ehnvik/repos"
  );
  return response.data;
};
