import { BoxIcon } from './BoxIcon';
import { Options } from "./Options";

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
  social,
  isMobileView,
  resume,
  url
}) => {
  return (
    <section className="home section" id="home">
      <Options />
      <div className="home__container bd-grid">
        <div className="home__data bd-grid">
          <img src={image} alt="profile_image" className="home__img no-print" />
          <h1 className="home__title">{name}</h1>
          <h3 className="home__profession">{ocupation}</h3>
        </div>
        <div className='home__contact bd-grid'>
          <BoxIcon className="home__icon bx-envelope" label={`Send an email to ${name}`} url={`mailto:${email}`} />
          {true && social.map((social) => <BoxIcon key={social.name} {...social} />)}
          <BoxIcon className="home__icon bxs-file-pdf" label={resume} url={url} />
        </div>
      </div>
    </section>
  );
};
