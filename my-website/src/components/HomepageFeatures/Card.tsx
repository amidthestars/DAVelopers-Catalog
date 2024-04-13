import styles from './styles.module.css';

export type CardOptions = {
  title: string;
  description: string;
  backgroundImage: string;
};

export default function Card({title, description, backgroundImage}: CardOptions): JSX.Element {
  return (
    <div>
      <div className="side-1">
        <div className={styles.card}>
          <h2>{title}</h2>
          <img src={backgroundImage} alt={title}/>
          <p>{description}</p>
        </div>
      </div>
      <div className="side-2">
        <div className={styles.card}>
          <h2>{title}</h2>
          <img src={backgroundImage} alt={title}/>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}