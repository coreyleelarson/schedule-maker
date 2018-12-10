import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import React, { useContext } from 'react';
import ScheduleContext from 'contexts/schedule';
import styles from './index.scss';

function Options() {
  const {
    isGenerating,
    numOfCourts,
    setNumOfCourts,
    numOfRounds,
    setNumOfRounds,
    showProgResults,
    setShowProgResults,
  } = useContext(ScheduleContext);

  return (
    <div className={styles['grid']}>
      <TextField
        className={styles.courts}
        disabled={isGenerating}
        label="# of Courts"
        onChange={e => setNumOfCourts(Number(e.target.value))}
        type="number"
        value={numOfCourts}
      />
      <TextField
        className={styles['rounds']}
        disabled={isGenerating}
        label="# of Rounds"
        onChange={e => setNumOfRounds(Number(e.target.value))}
        type="number"
        value={numOfRounds}
      />
      <FormGroup row>
        <FormControlLabel
          className={styles['progressive']}
          control={
            <Checkbox
              checked={showProgResults}
              disabled={isGenerating}
              onChange={e => { setShowProgResults(e.target.checked) }}
            />
          }
          label="Show Progressive Results"
        />
      </FormGroup>
    </div>
  );
}

export default Options;