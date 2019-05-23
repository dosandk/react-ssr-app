import React from 'react';

import styles from './index.scss';
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

const SecondPage = ({ t }: any) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>{t('Second Page')}</title>
        <meta
          name="description"
          content={t('Second page some incredible description')}
        />
      </Helmet>
      <h1>{t('Second Page')}</h1>
    </div>
  );
};

export default withTranslation('secondPage')(SecondPage);

