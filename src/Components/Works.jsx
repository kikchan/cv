import { Description } from "./Description";

export const Works = ({ works, worksLabel }) => {
  return (
    <section className="work-experience section" id="experience">
      <h2 className="section-title">{worksLabel}</h2>
      <div className="experience__container bd-grid">
        {works.map((work) => (
          <Work key={work.company} {...work} />
        ))}
      </div>
    </section>
  );
};

const Work = ({ title, period, company, tasksLabel, description, technologies, technologiesLabel }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <span className="experience__company">
          {period} | {company}
        </span>
        <h3 className="experience__label">{tasksLabel}</h3>
        {description.map((desc, i) => <Description key={i} desc={desc} />)}

        <h3 className="experience__label">{technologiesLabel}</h3>
        {technologies.map((tech, i) => <Description key={i} desc={tech} />)}
      </div>
    </div>
  );
};
