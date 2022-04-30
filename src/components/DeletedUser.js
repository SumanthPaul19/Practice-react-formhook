function DeletedUser(props)
{
    let user=props.dUsers
    let handleUserRestore=props.restoreuser
   
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
          user.map((el, ind)=>
            {
                return(
                    <tr key={ind}>
                <td>{el.id}</td>
                <td>{el.username}</td>
                <td>{el.age}</td>
                <td>{el.city}</td>
                <td>{el.mobile}</td>
                <td>
                    <button className="btn btn-success" onClick={()=>handleUserRestore(el.id)}>Restore</button>
                </td>
                </tr>
                )

            })
        }
    </tbody>


</table>
 )

}
export default DeletedUser;