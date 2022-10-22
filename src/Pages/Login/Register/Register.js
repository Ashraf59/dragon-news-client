import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Register = () => {
const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext)
const [error, setError] = useState('');
const [accepted, setAccepted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            console.log(user)
            handleUpdateUserProfile(name, photoURL)
            handleEmailVarification();
            toast.success('Please verify your email')

            

        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        
        })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL 
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handleEmailVarification = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Your Name</Form.Label>
             <Form.Control type="text" name="name" placeholder="Your Name" />
         </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Your Photo</Form.Label>
             <Form.Control type="text" name="photoURL" placeholder="photo URL" />
         </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" name = "email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name = "password" placeholder="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" onClick={handleAccepted}
        label={<> Accept
        <Link to = "/terms">Accept Terms and Conditions</Link>
        
        </>} />
      </Form.Group>
      
      <Button variant="primary" type="submit" disabled = {!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger">
        {error}
        </Form.Text>
    </Form>
            
        
    );
};

export default Register;