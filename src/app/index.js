import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';
import ScheduleForm from 'components/schedule_form';
import styles from './index.scss';

function App() {
  return (
    <Fragment>
      <main>
        <div className={styles.container}>
          <Typography variant="h2">Schedule Generator</Typography>
          {true && <ScheduleForm />}
        </div>
      </main>
    </Fragment>
  );
}

export default App;