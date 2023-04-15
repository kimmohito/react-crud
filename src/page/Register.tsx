import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Register = ():JSX.Element => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err);
        }
    };

    return(

        <Card
            style={{ width: '18rem' }}
            className="m-auto mt-4 p-4"
        >
            <h3
                className="mb-4"
            >
                Register
            </h3>

            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 rounded border p-2"
            />

            <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 rounded border p-2"
            />
            
            <Button onClick={signUp}>
                Sign Up
            </Button>

            <p
                className="mt-4 mb-0"
            >Already have an account? <Link to="/login">Login</Link></p>

        </Card>
        
    )
};

export default Register;

