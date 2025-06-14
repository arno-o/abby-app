import styles from './Blob.module.css';
import type { IdentityItem } from '../data/data';

interface BlobBackgroundProps {
  identity: IdentityItem;
}

const BlobBackground = ({ identity }: BlobBackgroundProps) => {
  const colors = ['--color1', '--color2', '--color3', '--color4', '--color5', '--color6'];
  const values = [identity.g1, identity.g2, identity.g3, identity.g4, identity.g5, identity.g6];

  return (
    <div className={styles['gradient-bg']}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={styles['gradients-container']}>
        {values.map((value, index) => (
          <div
            key={index}
            className={styles[`g${index + 1}`]}
            style={{
              background: `radial-gradient(circle at center, rgba(var(${colors[index]}), ${value}) 0, rgba(var(${colors[index]}), 0) 50%) no-repeat`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BlobBackground;