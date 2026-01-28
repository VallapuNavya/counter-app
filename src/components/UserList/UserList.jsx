import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
    setInterval(fetchUsers, 10000); // Fetch users every 10 seconds
  }, []);

  return (
    <div>
      <h2>User List Component</h2>

      {users.length === 0 ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        users.map((user) => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserList;