import React, { useEffect, useState } from 'react';
import Loading from './Loading';
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await fetch("https://api.github.com/users");
    setLoading(false);
    const data = await resp.json();
    setUsers(data);
  }
  if(loading)
    return <Loading/>
  return (
    <>
      <div className="container text-center bg-light">
        <h1>List of all Github Users</h1>
        <div className="row">
          {
            users.map((curr) => {
              return (
                <div className="col-sm">
                <div className="card mt-3 p-4" style={{ width: "18rem" }}>
                  <img src={curr.avatar_url} className="card-img-top rounded-circle" alt="apple" />
                  <div className="card-body">
                    <h5 className="card-title">{curr.login}</h5>
                    <p className="card-text">{curr.id}</p>
                    <p className="card-text">{curr.node_id}</p>
                  </div>
                </div>
                </div>)
            })
          }
        </div>
        </div>
    </>
  )
}
export default App;
