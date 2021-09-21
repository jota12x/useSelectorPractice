import React, { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { selectedUserSelector } from 'src/features/user';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import { RootState } from 'src/features';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

const UserInformation = ()=> {
  const classes = useStyles();
  // const selectedUser = useSelector(selectedUserSelector);
  const selectedUser = useSelector(((state: RootState)=> state.user.selectedUser));

  const [renderAgain, setRenderAgain] = useState(false);

  console.log("=====");
  console.log("UserInformation rendered");
  console.log('selectedUser', selectedUser);
  //won''t trigger a rerender because the reference stays the same
  useEffect(()=>{
    console.log("selectedUser changed!");
  },[selectedUser])
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {selectedUser.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {selectedUser.personal_note}
          </Typography>
          {selectedUser.name!=="" && <Button variant="contained" color="primary"
            style={{marginTop: 14}} onClick={()=>{
              setRenderAgain(true);
            }}>
              Post To Twitter
          </Button>}
        </CardContent>
      </div>
    </Card>
  );
}
export default React.memo(UserInformation);
