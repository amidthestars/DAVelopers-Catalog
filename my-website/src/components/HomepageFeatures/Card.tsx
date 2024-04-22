import styles from './styles.module.css';

type Link = {
  text: string;
  url: string;
}

export type CardOptions = {
  title: string;
  description: string;
  backgroundImage: string;
  links: Link[];
};

export default function Card({title, description, backgroundImage, links}: CardOptions): JSX.Element {
  return (
    <div className={styles['flip-card']}>
      <div className={styles['flip-card-inner']}>
        <div className={styles['flip-card-front']}>
          <h2>{title}</h2>
          <img src={backgroundImage} alt={title}/>
          <p>{description}</p>
        </div>
        <div className={styles["flip-card-back"]}>
          {
            links.map(
              link => <a href={link.url} className={styles.button}>{link.text}</a>
            )
          }
        </div>
      </div>
    </div>
    /*
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
    */
  );
}