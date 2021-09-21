import React, { useEffect } from 'react';
import * as _ from "lodash";

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {shallowEqual, useSelector} from 'react-redux';
// import { RootState } from 'src/features';
import { selectedUsernameSelector, selectedUserSelector } from 'src/features/user';
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

const UsernameBanner = ()=> {
  const classes = useStyles();
  const selectedUser = useSelector(selectedUserSelector);
//   const selectedUsername = useSelector(selectedUsernameSelector);
//   const selectedUser = useSelector(((state: RootState)=> state.user.selectedUser));

  console.log("=====");
  console.log("UsernameBanner rendered");
  //won''t trigger a rerender because the reference stays the same
//   useEffect(()=>{
//     console.log("selectedUser changed!");
//   },[selectedUser])
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {selectedUser.name}
          </Typography>
         {selectedUser.name!=="" &&  <Typography>
              is playing music
          </Typography>}
        </CardContent>
      </div>
    </Card>
  );
}
export default React.memo(UsernameBanner);
