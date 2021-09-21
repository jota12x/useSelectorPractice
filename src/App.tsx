import './App.css';
import UserList from './components/UserList';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import UserInformation from './components/UserInformation';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { submitUser } from './features/form';
import { changePersonalNote } from './features/user';
import UsernameBanner from './components/UsernameBanner';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [personalNote, setPersonalNote] = useState("");
  const [open,setOpen] = useState(false);
  const [editNoteOpen , setEditNoteOpen] = useState(false);
  // const [renderAgain, setRenderAgain] = useState(false);
  const handleClose = ()=>{
    setOpen(false);
    setEditNoteOpen(false);
  }
  return (
    <div className="App">
      <Box flexDirection="row" display="flex">
        <UserList />
        <UserInformation />
        <UsernameBanner />
      </Box>
      <Button variant="contained" color="primary" style={{float:'left', marginLeft: 20}}
      onClick={()=>setOpen(true)}>
        Add user
      </Button>
      <Button variant="contained" color="primary" style={{float:'left', marginLeft: 20}}
      onClick={()=>setEditNoteOpen(true)}>
        Edit selected note
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <form onSubmit={(evt)=>{
            evt.preventDefault();
            dispatch(submitUser({
              submittedUser:{
                name,
                personal_note:personalNote,
                profile_image:'',
              }
            }));
            handleClose();
          }}>
            <TextField
              required
              id="outlined-required"
              label="name"
              style={{display:'block'}}
              value={name}
              onChange={(evt)=>setName(evt.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="personal_note"
              style={{display:'block', marginTop: 14}}
              onChange={(evt)=>setPersonalNote(evt.target.value)}
              value={personalNote}
            />
            <Button type="submit" variant="contained" color="primary"
            style={{marginTop: 14}}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal
        open={editNoteOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
         <Box sx={{ ...style, width: 400 }}>
           <form onSubmit={(evt)=>{
            evt.preventDefault();
            dispatch(changePersonalNote({
              note: personalNote
            }));
            handleClose();
          }}>
           <TextField
              required
              id="outlined-required"
              label="personal_note"
              style={{display:'block', marginTop: 14}}
              onChange={(evt)=>setPersonalNote(evt.target.value)}
              value={personalNote}
            />
            <Button type="submit" variant="contained" color="primary"
            style={{marginTop: 14}}>
              Update
            </Button>
           </form>
           </Box>

      </Modal>
    </div>
  );
}

export default App;
