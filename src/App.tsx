import './App.css'

import React, { useState } from 'react'

import { auth } from './config/firebase'

import { Login } from './page/Login'
import { Profile } from './page/Profile'
import { Register } from './page/Register'
import { Error404 } from './page/Error404'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

import { Routes, Route, Navigate, Link } from 'react-router-dom'

import UserContext from './context/UserContext'
import { User } from 'firebase/auth'

function App() :JSX.Element {

    const [currentUser, setCurrentUser] = useState<User | null>(null);

    auth.onAuthStateChanged( (current) => setCurrentUser(current));

    return(
        <UserContext.Provider value={{currentUser}}>
            {
                !currentUser && (
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/' element={<Login />} />
                    </Routes>
                )
            }
            {
                currentUser && (
                    <Routes>
                        <Route path='/' element={<Profile />} />
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                )
            }
        </UserContext.Provider>
    );

}

/* Notes:
    Craco
    Cognitive Complexity.
    Ternary operator
    null coalescing
    truthy falsy
    Solid Principle
*/

export default App;