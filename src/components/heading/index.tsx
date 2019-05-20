import React from 'react';
import {Trans} from 'react-i18next';

declare type levelType = 'one' | 'two' | 'three' | 'four' | 'five';

interface IProps {
  level: levelType;
  children: any;
  noTranslate?: boolean;
}

interface IHProps {
  children: string | string[] | JSX.Element[] | JSX.Element;
}

const components = {
  one: ({ children }: IHProps) => <h1>{children}</h1>,
  two: ({ children }: IHProps) => <h2>{children}</h2>,
  three: ({ children }: IHProps) => <h3>{children}</h3>,
  four: ({ children }: IHProps) => <h4>{children}</h4>,
  five: ({ children }: IHProps) => <h5>{children}</h5>
};

const H: React.FC<IProps> = ({ level, children, noTranslate }) => {
  const Component = components[level];

  return (
    <Component>
      {
        noTranslate ? children : <Trans>{children.trim()}</Trans>
      }
    </Component>
  );
};

export default H;
