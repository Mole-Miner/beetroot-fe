import React, { useState } from "react";
import './assets/scss/App.scss';
import Counter from "@js/components/Counter";
import Movies from "@js/pages/Movies";

function useLocalStorage() {
    const data = {
        email: 'qwerty@a',
        password: 'qwerty123'
    }
    let currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(data));
    }
    currentUser = localStorage.getItem('currentUser');
    return JSON.parse(currentUser);
}

function useIsLoggedIn() {
    const currentUser = useLocalStorage();
    return !!currentUser;
}

/*function User({user}) {
    const {id, name} = user;
    return <div>
        <b>{id}</b>
        <p>{name}</p>
    </div>
}

const users = Array.from({length: 10}, (_, i) => ({id: Math.round(Math.random() * 1000), name: `Name ${i}`}))

function App() {
    return users.map((user) => <User key={user.id} user={user} />);
}*/

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const currentUser = useLocalStorage();
    const [isLoggedIn, setIsLoggedIn] = useState(useIsLoggedIn());

    function onEmail(e) {
        setEmail(e.target.value);
    }

    function onPassword(e) {
        setPassword(e.target.value);
    }

    function onLogin(e) {
        e.preventDefault();
        if (email !== currentUser.email || password !== currentUser.password) {
            setIsLoggedIn(false);
            return;
        }
        setIsLoggedIn(true);
    }

    return <>
        {
            isLoggedIn ? <Movies ></Movies> : <form onSubmit={onLogin} className='login'>
                <label>
                    Email
                    <input value={email} onChange={onEmail} type='email' required />
                </label>
                <label>
                    Password
                    <input value={password} onChange={onPassword} type='password' required />
                </label>
                <button>Login</button>
            </form>
        }
    </>
}

export default App;
