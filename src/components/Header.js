function Header(props){
    let list=props.data
    return(
        <ul className="nav bg-dark text-info">
            {
                list.map((listItem,ind)=>{
                    return(
                        <li className="nav-item" key={ind}>
                            <a className="nav-link" htmlFor="#">{listItem}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}   

export default Header;