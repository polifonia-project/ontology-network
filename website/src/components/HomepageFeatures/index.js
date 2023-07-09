import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Expressive and flexible',
    Svg: require('@site/static/img/placeholder.svg').default,
    description: (
      <>
        PON provides an abstraction to describe music data amd resources across
        different genres and periods, for various end users and datasets. It 
        is thought to be specialised and extended.
      </>
    ),
  },
  {
    title: 'Aligned with music ontologies',
    Svg: require('@site/static/img/placeholder.svg').default,
    description: (
      <>
        Our ontologies are aligned with other semantic resources for music,
        including DOREMUS, The Music Ontology, Music OWL, and Wikidata. Our
        design simplifies their reuse and integration.
      </>
    ),
  },
  {
    title: 'Provenance at the core',
    Svg: require('@site/static/img/placeholder.svg').default,
    description: (
      <>
        Who said that Beethoven is the composer of this piece? How was this link
        to MusicBrainz obtained? With wich confidence? Provenance is the core of
        PON, and you can always include sources.  
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        {/* <img className={styles.featureSvg} src={Svg}/> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
