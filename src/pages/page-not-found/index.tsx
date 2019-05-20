import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import P from '../../components/paragraph';
import H from '../../components/heading';

import styles from './index.scss';

const PageNotFound = ({ t }: any) => {
  return (
    <div className={styles['page-not-found']}>
      <H level="one">Sorry!</H>
      <P className="body text-center">
        The page you are looking for was moved, deleted, renamed or might never existed.
      </P>
      <NavLink to="/">
        <button>{t('HOME PAGE')}</button>
      </NavLink>
    </div>
  );
};

export default withTranslation()(PageNotFound);
