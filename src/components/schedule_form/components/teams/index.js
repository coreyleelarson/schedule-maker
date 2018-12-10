import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import classnames from 'classnames';
import React, { useContext, useState } from 'react';
import ScheduleContext from 'contexts/schedule';
import styles from './index.scss';

function Teams({ className }) {
  const { isGenerating, schedule, actions } = useContext(ScheduleContext);
  const [team, setTeam] = useState('');

  const handleAddTeam = () => {
    if (team.length) {
      setTeam('');
      actions.addTeam(team);
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) handleAddTeam();
  }

  return (
    <div className={classnames(className, styles['grid'])}>
      <TextField
        className={styles['input']}
        disabled={isGenerating}
        label="Team Name"
        onChange={e => setTeam(e.target.value)}
        onKeyDown={handleKeyDown}
        value={team}
      />
      <Button
        className={styles['button']}
        disabled={!team.length || isGenerating}
        variant="outlined"
        color="primary"
        onClick={handleAddTeam}
      >
        Add Team
      </Button>
      <Table className={styles['table']}>
        <TableBody>
          {schedule.teams.length > 0 ?
            schedule.teams.map((team, index) => (
              <TableRow key={index}>
                <TableCell>{team}</TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell>There are no teams.</TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default Teams;