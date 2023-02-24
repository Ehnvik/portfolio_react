import moment from "moment";
import { IRepo } from "../../models/IRepo";
import "./Project.scss";

interface IProjectProps {
  project: IRepo;
}

export const Project = (props: IProjectProps) => {
  let newDate = (props.project.created_at = moment().format("YYYY-MM-DD"));

  return (
    <div className="projects__repo-box">
      <h3 className="projects__repo-box__title">{props.project.name}</h3>
      <p className="projects__repo-box__date">{newDate}</p>
      <p className="projects__repo-box__description">
        {props.project.description}
      </p>
      <h4 className="projects__repo-box__topics">
        {`${props.project.topics}`}
      </h4>
      <a
        className="projects__repo-box__link"
        href={props.project.clone_url}
        target="_blank"
        rel="noreferrer">
        <i className="fa-brands fa-github"></i>Hämta projekt
      </a>
    </div>
  );
};
