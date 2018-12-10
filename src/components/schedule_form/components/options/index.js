import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import React, { useContext } from 'react';
import ScheduleContext from 'contexts/schedule';
import styles from './index.scss';

function Options() {
  const { actions, schedule } = useContext(ScheduleContext);

  return (
    <div className={styles['grid']}>
      <TextField
        className={styles.courts}
        disabled={schedule.isGenerating}
        label="# of Courts"
        onChange={e => actions.setNumOfCourts(e.target.value)}
        type="number"
        value={String(schedule.numOfCourts)}
      />
      <TextField
        className={styles['rounds']}
        disabled={schedule.isGenerating}
        label="# of Rounds"
        onChange={e => actions.setNumOfRounds(e.target.value)}
        type="number"
        value={String(schedule.numOfRounds)}
      />
      <FormGroup row>
        <FormControlLabel
          className={styles['progressive']}
          control={
            <Checkbox
              checked={schedule.showProgResults}
              disabled={schedule.isGenerating}
              onChange={e => { actions.setShowProgResults(e.target.checked) }}
            />
          }
          label="Show Progressive Results"
        />
      </FormGroup>
    </div>
  );
}

export default Options;