import React, { useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {useDispatch} from 'react-redux';
import {USERS_LIST} from '../utils/constants';
import { SelectedUser, setSelectedUser } from 'src/features/user';
import { submittedUserSelector } from 'src/features/form';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      cursor:'pointer',
    },
    inline: {
      display: 'inline',
    },
  }),
);

export default function UserList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userList , setUserList]= useState<SelectedUser['selectedUser'][]>([]);
  const submittedUser = useSelector(submittedUserSelector);

  useEffect(()=>{
    setUserList(USERS_LIST);
  },[])

  useEffect(()=>{
    if(submittedUser && submittedUser?.name!=="")
      setUserList((prevUserList)=> [...prevUserList, submittedUser]);
  },[submittedUser])
  return (
    <List className={classes.root}>
      {userList.map(user=>
        <ListItem alignItems="flex-start" key={user.name} onClick={()=>{
          dispatch(setSelectedUser(
            {selectedUser:user}
          ))
        }}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {user.personal_note}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        )}
    </List>
  );
}
