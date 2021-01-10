import firebase from 'firebase';
import { USER_STATE_CHANGE} from '../constants/index'

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            } else {
                console.log("does not exist")
            }
        })
    })
}

export function fetchQuestions() {
    // return ((dispatch) => {

    //     firebase.firestore()
    //     .collection("users")
    //     // .doc(firebase.auth().currentUser.uid)
    //     .get()
    //     .then((snapshot) => {
    //         console.log("WANKKKERRSSSS "  + snapshot);
    //         if(snapshot.exists){
    //             dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
    //             console.log("WANKKKERRSSSS "  + snapshot);
    //         } else {
    //             console.log("does not exist")
    //         }
    //     })
    // })
console.log(
    firebase.firestore().collection('/users')
    .get().then((snapshot) => {
        console.log("i", snapshot.data());
    })
);
    // .on('value', querySnapShot => {
    //       let data = querySnapShot.val() ? querySnapShot.val() : {};
    //       let todoItems = {...data};
    //       this.setState({
    //         todos: todoItems,
    //       });
    //     });

}