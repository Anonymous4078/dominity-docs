import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        one of the most easiest framework to use , it is directly written in js
        and handles everything from routing to reactivity
      </>
    ),
  },
  {
    title: 'Powerful and Fast ',
    Svg: require('@site/static/img/plane.svg').default,
    description: (
      <>
        Dominity is powerful with its own router and reactivity system , it
        makes it easy to create powerful webapps
      </>
    ),
  },
  {
    title: 'Tiny build Size',
    Svg: require('@site/static/img/cat.svg').default,
    description: (
      <>
        dominity is extreemely tiny and does not contribute more than 10kB to
        your final build, while it does all the chores{' '}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
