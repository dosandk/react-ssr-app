import React from 'react';

import styles from './index.scss';
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

const HomePage = ({t}: any) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>{t('Home Page')}</title>
        <meta
          name="description"
          content={t('Home page some nice description')}
        />
      </Helmet>
      <h1>{t('Home Page')}</h1>
      <div>
        {t('some home page description')}
      </div>
    </div>
  );
};

export default withTranslation('homePage')(HomePage);
