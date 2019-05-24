import React from 'react';
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import P from '../../components/paragraph';
import H from '../../components/heading';

import Icon from '../../assets/images/icon-card-2.svg';

import styles from './index.scss';

const PageNotFound = ({ t }: any) => {
  return (
    <div className={styles['page-not-found']}>
      <Helmet>
        <title>{t('Page Not Found')}</title>
        <meta
          name="description"
          content={t('Page Not Found description')}
        />
      </Helmet>
      <H level="one">{t('Page Not Found')}</H>
      <P className="body text-center">
        {t('The page you are looking for was moved, deleted, renamed or might never existed.')}
      </P>
      <NavLink to="/">
        <button>{t('homePage|Home Page')}</button>
      </NavLink>
      <div>
        <img src={Icon} alt="icon" />
      </div>
    </div>
  );
};

export default withTranslation(['notFoundPage', 'homePage'])(PageNotFound);
