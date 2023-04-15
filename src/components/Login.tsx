import { auth, googleProvider } from '../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'

import { Button } from 'react-bootstrap'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
    }

    console.log(process.env)

    return (

        <div>

            <label>Email</label>
            <br/>
            <input
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            

            <label>Password</label>
            <br/>
            <input
                placeholder="Password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>

            <button onClick={signIn}>Sign In</button>
            
            
        </div>


    )
};