import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card, { CardOptions } from './Card';

const cardList: CardOptions[] = [
  {
    title: 'Signal Processing',
    description: 'Modules for processing audio or other input signals.',
    backgroundImage: 'images/signal_processing.jpeg',
  },
  {
    title: 'Peripherals',
    description: 'Modules for interacting with various existing peripherals.',
    backgroundImage: 'images/peripherals.jpeg',
  },
  {
    title: 'Graphics',
    description: 'Modules for graphics pipelines and ROM-based game sprites.',
    backgroundImage: 'images/graphics.png',
  },
  {
    title: 'Miscellaneous',
    description: 'Various utility modules not found in the other categories.',
    backgroundImage: 'images/misc.jpeg',
  }
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.cards}>
      {cardList.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </section>
  );
}
