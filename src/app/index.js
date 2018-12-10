import React, { Fragment } from 'react';
import ScheduleForm from 'components/schedule_form';
import styles from './index.scss';

function App() {
  return (
    <Fragment>
      <main>
        <div className={styles.container}>
          <ScheduleForm />
        </div>
      </main>
    </Fragment>
  );
}

export default App;