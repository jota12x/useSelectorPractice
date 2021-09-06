import './App.css';
import UserList from './components/UserList';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import UserInformation from './components/UserInformation';
function App() {
  return (
    <div className="App">
      <Box flexDirection="row" display="flex">
        <UserList />
        <UserInformation />
      </Box>
      <Button variant="contained" color="primary" style={{float:'left', marginLeft: 20}}>
        Add user
      </Button>
    </div>
  );
}

export default App;
