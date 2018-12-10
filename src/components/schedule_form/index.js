import React from 'react';
import styles from './index.scss';
import Buttons from './components/buttons';
import Options from './components/options';
import Teams from './components/teams';

function ScheduleForm() {
  return (
    <div className={styles['grid']}>
      <Options />
      <Teams />
      <Buttons />
    </div>
  )
}

export default ScheduleForm;