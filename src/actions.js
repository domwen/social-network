import axios from './axios';
export async function receiveFriendsAndWannabes() {
    const { data } = await axios.get('/listOfFriends');
    console.log('DATA in axios from receiveFriendsAndWannabes :', data);
    return {
        type: 'RECEIVE_FRIENDS_WANNABES',
        users: data
    };
}

export function acceptFriendRequest(props) {
    let receiver_id = props;
    let status = 2;
    return axios
        .post(`/friendRequest`, {
            status: status,
            receiver_id: receiver_id
        })
        .then(response => {
            return {
                type: 'ACCEPT_FRIEND_REQUEST',
                receiver_id
            };
        })
        .catch(e => console.log('catch in acceptFriendRequest: ', e));
}

export function unfriend(receiver_id) {
    console.log('receiver_id', receiver_id);
    return axios
        .post(`/deleteFriendRequest`, {
            receiver_id: receiver_id
        })
        .then(response => {
            console.log('response in unfriend: ', response);
            return {
                type: 'UNFRIEND',
                receiver_id
            };
        })
        .catch(e => console.log('catch in unfriend: ', e));
}