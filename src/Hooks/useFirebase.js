import { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/Home/Login/Firebase/Firebase.init';
// import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleNameChange= (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        if(e.target.value < 6){
            console.error('error')
        } else{
            setPassword(e.target.value)
        }
        
    } 


    /* const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
        createRegistration(email, password)
        
    
      } */
    




    const auth = getAuth();

    const handleRegistration = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                
                setError(error.message);
                // ..
            });

    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            
        });
        return () => unsubscribed;
    }, [])

    const signOut = () => {
        signOut(auth).then(() => {
            setUser('')
            // Sign-out successful.
        }).catch((error) => {
            setError(error)
        });
}


   /*  

    const handleNameChange= (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        registerNewUser(email, password);
    
    }

    const auth = getAuth();

    const registerNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user);
            const user = result.user;
            setUserName()
    })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    // observe user state change
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            
        });
        return () => unsubscribed;
    }, [])
   
    const logOut = () => {
        signOut(auth)
            .then(() => { })      
    } */

    
    return {
        handleRegistration,
        signOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange

    }
    
};

export default useFirebase;