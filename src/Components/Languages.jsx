export const Languages = ({
  label,
  list
}) => {
  return (
    <>
      <section className="technical-skills section" id="skills">
        <h2 className="section-title">{label}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {list.map((language) => <Language key={language.name} language={language} />)}
          </ul>
        </div>
      </section>
    </>
  );
};

const Language = ({ language }) => (
  <li className="skills__name">
    <span className="skills__circle" /> {language.name} - {language.level}
  </li>
);
