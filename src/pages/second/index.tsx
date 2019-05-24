import React from 'react';
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";

import Icon from '../../assets/images/icon-card-3.svg';

import styles from './index.scss';

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
      <div>
        <img src={Icon} alt="icon" />
      </div>
    </div>
  );
};

export default withTranslation('secondPage')(SecondPage);

