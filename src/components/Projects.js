import React from 'react';
import Emoji from './Emoji';
import myProjects from '../data/myProjects';

const Projects = () => {
  return (
    <section>
      <h2>
        Projects <Emoji symbol="📂" />
      </h2>
      <p>Some projects I've built, new and old.</p>
      <ul className="grid list--unstyled">
        {myProjects.map((project, index) => {
          return (
            <li key={index} className="grid__item">
              <h3>{project.name}</h3>
              {project.description ? <p>{project.description}</p> : null}

              <div className="project__tags">
                {project.tags
                  ? project.tags.map((tag) => {
                      return <span className="project__tag">{tag}</span>;
                    })
                  : null}
              </div>
              <div>
                {project.url_github ? (
                  <a href={project.url_github}>Repository for {project.name}</a>
                ) : null}
                {project.url_live ? (
                  <a className="grid__item-cta" href={project.url_live}>
                    View {project.name}
                  </a>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
