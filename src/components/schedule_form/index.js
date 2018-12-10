import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useContext } from 'react';
import ScheduleContext from 'contexts/schedule';
import styles from './index.scss';
import Buttons from './components/buttons';
import Options from './components/options';
import Teams from './components/teams';

function ScheduleForm() {
  const { isGenerating = false } = useContext(ScheduleContext);
  
  return (
    <div className={styles['container']}>
      <div className={styles['grid']}>
        <Options />
        <Teams />
        <Buttons />
      </div>
      {isGenerating &&
        <div className={styles['loader']}>
          <CircularProgress size={50} />
        </div>
      }
    </div>
  )
}

export default ScheduleForm;