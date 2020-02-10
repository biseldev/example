import React, { useState } from 'react';
import { Form } from '@components';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';

const App = props => {
  const { classes } = props;

  const handleOnClick = () => {
    alert('HOLIS THIS IS TEST APP');
  };

  return (
    <div className={classes.app}>
      <h1>Book store</h1>
      <p>Welcome! this is a great book store</p>
      <Button
        color="primary"
        variant="contained"
        onClick={handleOnClick}
      >
        Test
      </Button>
    </div>
  );
};

export default withStyles(styles)(App);
