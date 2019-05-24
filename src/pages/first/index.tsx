import React from 'react';
import {Helmet} from 'react-helmet';
import { withTranslation } from 'react-i18next';
import H from '../../components/heading';
import P from '../../components/paragraph';

import Icon from '../../assets/images/icon-card-1.svg';

import styles from './index.scss';

const FirstPage = ({ t }: any) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>{t('First Page')}</title>
        <meta
          name="description"
          content={t('First page some awesome description')}
        />
      </Helmet>
      <H level="one">{t('First Page')}</H>
      <div>
        <P>some description</P>
      </div>
      <div>
        <img src={Icon} alt="icon" />
      </div>
    </div>
  );
};

export default withTranslation('firstPage')(FirstPage);

