import Button from '@material-ui/core/Button';
import React, { useContext } from 'react';
import ScheduleContext from 'contexts/schedule';
import styles from './index.scss';

function Buttons() {
  const { actions, schedule } = useContext(ScheduleContext);

  return (
    <div className={styles['grid']}>
      <Button
        disabled={schedule.isGenerating}
        variant="contained"
        color="primary"
        onClick={actions.generate}
      >
        Generate
      </Button>
      <Button
        disabled={schedule.isGenerating}
        variant="contained"
        color="secondary"
        onClick={actions.reset}
      >
        Reset
      </Button>
    </div>
  );
}

export default Buttons;