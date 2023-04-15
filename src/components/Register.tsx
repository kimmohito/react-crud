import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

export const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
    }

    console.log(process.env)

    return (

        <div>
            hELLO
            
        </div>




    );
};