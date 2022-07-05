import { useEffect , useState } from "react";

const List = ()=>
{
    const [data , setData] = useState([]);
    useEffect (()=>{
        const fetchData = async ()=>{
            const api = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7');
            const allData = await api.json();
            setData(allData.results);

        }
        fetchData();
    } , [])
  
    return (
        <div className="container">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rate</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>


            {data.map((user)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.title}</td>
                        <td>{user.vote_average}</td>
                        <td>
                            <img src={'https://image.tmdb.org/t/p/w500/'+user.backdrop_path} width='100px' height='100px'/>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
        </div>
    )
}

export default List;