import React from 'react';

interface ILoggedAreaProps {
  children: React.ReactElement;
}

import style from '../../styles/components/LoggedArea.module.scss'

const LoggedArea: React.FC<ILoggedAreaProps> = ({ children }: ILoggedAreaProps) => {
  return <div className={style.loggedAreaComponent
  }>
    <div>
      {children}
    </div>
  </div>;
}

export default LoggedArea;