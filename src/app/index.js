import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, useContext } from 'react';
import ScheduleForm from 'components/schedule_form';
import ScheduleContext from 'contexts/schedule';
import styles from './index.scss';

function App() {
  const { schedule } = useContext(ScheduleContext);

  return (
    <Fragment>
      <main>
        <div className={styles.container}>
          <Typography variant="h2">Schedule Generator</Typography>
          {true && <ScheduleForm />}
        </div>
      </main>
      {schedule.isGenerating &&
        <div className={styles['loader']}>
          <CircularProgress size={100} />
        </div>
      }
    </Fragment>
  );
}

export default App;