import UserCard from "./UserCard"

const userData = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
}

const user2 = {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
}


const App = () => {
    return (
        <div className="container">
            <UserCard user={userData} />
            <UserCard user={user2} />
        </div>
    );
};


export default App;