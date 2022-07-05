import { useEffect , useState } from "react";

const GetData = ()=>
{
    const [data , setData] = useState([]);
    useEffect (()=>{
        const fetchData = async ()=>{
            const api = await fetch('https://jsonplaceholder.typicode.com/users');
            const allData = await api.json();
            setData(allData);
        }
        fetchData();
    } , [])
  
    return (
        <div >
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>


            {data.map((user)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
        </div>
    )
}

export default GetData;