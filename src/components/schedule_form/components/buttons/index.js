import Button from '@material-ui/core/Button';
import React, { useContext } from 'react';
import ScheduleContext from 'contexts/schedule';
import styles from './index.scss';

function Buttons() {
  const { isGenerating, generate, reset } = useContext(ScheduleContext);

  return (
    <div className={styles['grid']}>
      <Button
        disabled={isGenerating}
        variant="contained"
        color="primary"
        onClick={generate}
      >
        Generate
      </Button>
      <Button
        disabled={isGenerating}
        variant="contained"
        color="secondary"
        onClick={reset}
      >
        Reset
      </Button>
    </div>
  );
}

export default Buttons;