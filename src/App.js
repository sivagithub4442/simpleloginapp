import './App.css';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (!isEmailValid) {
      alert('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Perform your signup logic here
    alert('Sign up successful');
  };

  return (
    
      <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center align-items-center bg-dark'>
        <div style={{width:'500px'}} className='bg-light rounded p-5'>
        <form onSubmit={handleSignUp}>

          <div className='text-center fs-2'>
            Register Form
          </div>
<div className='mb-3'>
          <TextField className='w-100' id="standard-basic" label="NAME" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
  
</div>       
{!isNameValid && <div className='mb-3 text-danger'>*Invalid Name</div>}

       
<div className='mb-3'>
         <TextField className='w-100' id="standard-basic" label="EMAIL" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
  
</div>        
{!isEmailValid && <div className='mb-3 text-danger'>*Invalid Email</div>}

<div className='mb-3'>
          <TextField className='w-100' id="standard-basic" label="PASSWORD" variant="standard" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
</div>        
{!isPasswordValid && <div className='mb-3 text-danger'>*Password must be at least 6 characters</div>}

<div className='mb-3'>
          <TextField className='w-100' id="standard-basic" label="CONFIRM PASSWORD" variant="standard" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
  
</div>
{!isConfirmPasswordValid && <div className='mb-3 text-danger'>*Passwords do not match</div>}


        <Stack direction="row" spacing={2}>
          <Button style={{width:'400px',height:'50px'}}  type='submit' className='bg-dark rounded-5 mt-5' variant="contained">Sign Up</Button>
          
          </Stack>
        </form>
        </div>

      </div>
  );
}

export default App;
