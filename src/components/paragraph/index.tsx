import React from 'react';
import {Trans} from 'react-i18next';

interface IProps {
  children: any;
  className?: string;
  noTranslate?: boolean;
}

const P: React.FC<IProps> = ({ children, noTranslate, className }) => {
  return (
    <p className={className}>
      {
        noTranslate ? children : <Trans>{children.trim()}</Trans>
      }
    </p>
  );
};

export default P;
