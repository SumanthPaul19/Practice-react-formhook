import {useState} from 'react'

function FormDemo(){
    
    let[username,setUsername]=useState('');
    let[userage,setUserAge]=useState('');
    let[city,setCity]=useState('');
    let[mobile,setMobile]=useState('');

    let [skills, setSkills] = useState([
        { name: "html", value: false },
        { name: "css", value: false },
        { name: 'javascript', value: false }
    ])

    //form submission
    const handleFormSubmit=(e)=>{
        e.preventDefault();

        let age=parseInt(userage)
        let userObj={username,age,city,mobile,skills}
        console.log('user obj is',userObj)

        /*
        //save this UserObj to API
        fetch("http://localhost:8080/users",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userObj)
        }) */
    }

    const handleCheck=(ind)=>{
        let skillsArr=[...skills]
        skillsArr[ind].value=!skillsArr[ind].value;
        setSkills(skillsArr)
    }

    return(
        <form className="w-75 mx-auto mt-5" onSubmit={handleFormSubmit}>
            <label>Username</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} className="form-control mb-4" placeholder="username" />

            <label>Age</label>
            <input type="number" onChange={(e)=>setUserAge(e.target.value)} value={userage} className="form-control mb-4" placeholder="enter age" />

            <label>City</label>
            <input type="text" onChange={(e)=>setCity(e.target.value)} value={city} className="form-control mb-4" placeholder="enter city" />

            <label>Mobile</label>
            <input type="number" onChange={(e)=>setMobile(e.target.value)} value={mobile} className="form-control mb-4" placeholder="enter mobile" />

            {/* Checkbox */}
            <label>Select Skilss</label>
            {
                skills.map((skillObj,ind)=>{
                    return (
                        <div className="form-check" key={ind}>
                            <input type="checkbox"
                                        onChange={()=>handleCheck(ind)}
                                        id={skillObj.name}
                                        className="form-check-input" />
                            <label htmlFor={skillObj.name} className="form-check-label">{skillObj.name}</label>
                        </div>
                    )
                })
            }

            <button type="submit" className="btn btn-success mt-4">Add User</button>
        </form>
    )
}

export default FormDemo;