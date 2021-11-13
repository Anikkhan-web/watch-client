import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";


initializeFirebase()
const useFirebase = () =>
{

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // register

    const registerUser = (name, email, password, history) =>
    {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {

                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() =>
                {

                }).catch((error) =>
                {

                });
                history.replace('/')

            })
            .catch((error) =>
            {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }
    const loginUser = (email, password, location, history) =>
    {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

            })
            .catch((error) =>
            {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, history) =>
    {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) =>
            {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) =>
            {

                setAuthError(error.message);
            }).finally(() => setIsLoading(false));


    }

    //onserver user state

    useEffect(() =>
    {

        const unsubscribe = onAuthStateChanged(auth, (user) =>
        {
            if (user)
            {
                setUser(user);
                getIdToken(user)
                    .then(idToken => [
                        setToken(idToken)
                    ])

            } else
            {
                setUser({})

            }
            setIsLoading(false);
        });
        return () => unsubscribe;




    }, [])


    useEffect(() =>
    {
        fetch(`https://thawing-basin-76663.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])

    // sign out

    const logout = () =>
    {
        setIsLoading(true);
        signOut(auth).then(() =>
        {
            // Sign-out successful.

        }).catch((error) =>
        {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }

    const saveUser = (email, displayName, method) =>
    {

        const user = { email, displayName };
        fetch('https://thawing-basin-76663.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()

    }


    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }



}
export default useFirebase;