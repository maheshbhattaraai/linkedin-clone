import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
import {login} from './features/userSlice'
import './Login.css'
function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const register = (e) => {
        e.preventDefault();
        if (!name)
            return alert("Please enter a fullname")
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: photo
                    }))
                })
            }).catch((e) => {
                return alert(e);
            })

    }
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => (
                dispatch(login({email: userAuth.user.email, uid: userAuth.user.uid, photoURL: userAuth.user.photoURL, displayName: userAuth.user.displayName}))
            )).catch(error => alert(error))
    }
    return (
        <div className='login'>
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" />
            <form onSubmit={loginToApp}>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name(required if registering)" />
                <input value={photo} onChange={e => setPhoto(e.target.value)} type="text" placeholder="Profile Picture Url(Optional)" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
            <p>Not a member?
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
