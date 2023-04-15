import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react"
import { auth } from "../config/firebase";


import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'




export const Profile = ():JSX.Element => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err);
        }
    }

    
    const logout = async () => {
        try{
            await signOut(auth);
        } catch (err) {
            console.error(err);
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
                    Profile 
                </h3>

                <p>Welcome back {auth?.currentUser?.displayName}</p>

                <Button onClick={logout}>
                    SignOut
                </Button>

            </Card>
        
    );
};

export default Profile;

