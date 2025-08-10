"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


// SSR
// import React from "react";
// import axios from "axios";

// async function getPosts() {
//   try {
//     const res = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts?_limit=5",
//       {
//         // ده بيمنع التخزين المؤقت ويخليها زي getServerSideProps
//         headers: { "Cache-Control": "no-cache" },
//       }
//     );
//     return res.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// export default async function About() {
//   const posts = await getPosts();

//   return (
//     <div>
//       <h1>About Page</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <strong>{post.title}</strong>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

