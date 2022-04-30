                        
function UsersList(props)
{
   let users=props.data
   let handleUserDelete=props.deleteuser
  // console.log(users)
   return(
    <table className="table table-bordered mt-5">
    <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Mobile</th>
        <th></th>
    </thead>
    <tbody>
        {
           users.map((el)=>
            {
                return(
                    <tr>
                <td>{el.id}</td>
                <td>{el.username}</td>
                <td>{el.age}</td>
                <td>{el.city}</td>
                <td>{el.mobile}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>handleUserDelete(el.id)}>X</button>
                </td>
                </tr>
                )

            })
        }
    </tbody>

</table>
   )
}

export default UsersList;