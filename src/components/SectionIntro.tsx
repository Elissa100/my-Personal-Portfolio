type SectionIntroProps = {
  number: string;
  title: string;
  description?: string;
};

export default function SectionIntro({ number, title, description }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <p className="section-number">{number} <span /> ELISSA SIBOMANA</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
