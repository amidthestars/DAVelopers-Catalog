import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card, { CardOptions } from './Card';

const cardList: CardOptions[] = [
  {
    title: 'Signal Processing',
    description: 'Modules for processing audio or other input signals.',
    backgroundImage: 'images/signal_processing.jpeg',
    links: [
      {
        text: 'Hamming Window',
        url: '/DAVelopers-Catalog/docs/signal_processing/hamming_window',
      }
    ]
  },
  {
    title: 'Peripherals',
    description: 'Modules for interacting with various existing peripherals.',
    backgroundImage: 'images/peripherals.jpeg',
    links: [
      {
        text: 'Donkey Kong Bongos',
        url: '/DAVelopers-Catalog/docs/peripherals/donkey_kong_bongos',
      },
      {
        text: 'NES Controller',
        url: '/DAVelopers-Catalog/docs/peripherals/nes_controller',
      },
      {
        text: 'Wii Nunchuck',
        url: '/DAVelopers-Catalog/docs/peripherals/wii_nunchuck',
      },
    ]
  },
  {
    title: 'Graphics',
    description: 'Modules for graphics pipelines and ROM-based game sprites.',
    backgroundImage: 'images/graphics.png',
    links: [
      {
        text: 'Ping-Pong RAM',
        url: '/DAVelopers-Catalog/docs/graphics/ping_pong_ram',
      },
      {
        text: 'Update-Only Graphics Generator',
        url: '/DAVelopers-Catalog/docs/graphics/update_only_graphics_generator',
      },
      {
        text: 'SDRAM Controller',
        url: '/DAVelopers-Catalog/docs/graphics/sdram_controller',
      },
      {
        text: 'Color Composition',
        url: '/DAVelopers-Catalog/docs/graphics/color_composition',
      }
    ]
  },
  {
    title: 'Miscellaneous',
    description: 'Various utility modules not found in the other categories.',
    backgroundImage: 'images/misc.jpeg',
    links: [],
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
