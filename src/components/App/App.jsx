import userData from "../Profile/profile.json";
import Profile from "../Profile/Profile";

import friends from "../FriendList/friendList.json";
import FriendList from "../FriendList/FriendList";

import transactions from "../Transaction/transactions.json";
import TransactionHistory from "../Transaction/Transaction";

import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
