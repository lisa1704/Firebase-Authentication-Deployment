import firebase from 'firebase/app';
import "firebase/auth";

const app= firebase.initializeApp({
    apiKey: "AIzaSyA1lOxRaj6EZh72dWSr-QMCd1cQAi9zWlg",
    authDomain: "fir-auth-development-8cddc.firebaseapp.com",
    projectId: "fir-auth-development-8cddc",
    storageBucket: "fir-auth-development-8cddc.appspot.com",
    messagingSenderId: "614193763594",
    appId: "1:614193763594:web:88da5ebf649be4bd1616f3"

});

const auth=app.auth();
export {auth};
export default app;