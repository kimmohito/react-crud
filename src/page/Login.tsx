import { useState } from "react"
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'




export const Login = ():JSX.Element => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err);
        }
    };

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    
    console.log(auth?.currentUser?.email)

    return(

            <Card
                style={{ width: '18rem' }}
                className="m-auto mt-4 p-4"
            >
                <h3
                    className="mb-4"
                >
                    Login
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
                
                <Button onClick={signIn}>
                    Sign In
                </Button>

                <p className="m-auto my-2">or</p>

                <Button onClick={signInWithGoogle}>
                    Sign In with Google
                </Button>

                <p
                    className="mt-4 mb-0"
                >Doesn't have an account? <Link to="/register">Register</Link></p>


                


            </Card>
        
    );
};

export default Login;

