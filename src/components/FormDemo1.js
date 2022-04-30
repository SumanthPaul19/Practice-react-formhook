import {useState} from 'react'

function FormDemo1(){

    let[empno,setEmpNO]=useState('');
    let[username,setUsername]=useState('');
    let[userage,setUserAge]=useState('');
    let[email,setEmail]=useState('');
    let[dob,setDob]=useState('');
    let[gender,setGender]=useState('');
    let[state,setState]=useState('');
    let[textarea,setTextArea]=useState('');

    //form submission
    const handleFormSubmit=(e)=>{
        e.preventDefault();

        let age=parseInt(userage)
        let employeeObj={empno,username,age,email,dob,gender,state,textarea}
        console.log('user obj is',employeeObj)

        //save this UserObj to API
        fetch("http://localhost:8080/employees",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(employeeObj)
        })
    }

    return(
        <form className="w-75 mx-auto mt-5" onSubmit={handleFormSubmit}>
            <label>Empno</label>
            <input type="number" nmae="id" onChange={(e)=>setEmpNO(e.target.value)} value={empno} className="form-control mb-4" placeholder="enter empno" />

            <label>Name</label>
            <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} value={username} className="form-control mb-4" placeholder="enter name" />

            <label>Age</label>
            <input type="number" name="age" onChange={(e)=>setUserAge(e.target.value)} value={userage} className="form-control mb-4" placeholder="enter age" />

            <label>Email</label>
            <input type="email" name="mail" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control mb-4" placeholder="enter email" />

            <label>Date Of Birth</label>
            <input type="date" name="dob" onChange={(e)=>setDob(e.target.value)} value={dob} className="form-control mb-4" placeholder="enter DOB" />

            <label>Gender</label>
            <div className="form-check">
                <input type="radio" name="gender" id="m" className="form-check-input" onChange={(e)=>setGender(e.target.value)} value="male"  />
                <label htmlFor="m" className="form-check-label">Male</label>
            </div>

            <div className="form-check">
                <input type="radio" name="gender" id="f" className="form-check-input" onChange={(e)=>setGender(e.target.value)} value="female"  />
                <label htmlFor="f" className="form-check-label mb-4">Female</label>
            </div>

            <label>State</label>
            <select name="state" className="form-select mb-4" onChange={(e) => setState(e.target.value)} value={state} >
                <option value="Kerala">Kerala</option>
                <option value="Telangana">Telangana</option>
                <option value="goa">Goa</option>
                <option value="Tamilnadu">Tamilnadu</option>
            </select>

            <label>Write Comments</label>
            <textarea className="form-control" onChange={(e)=>setTextArea(e.target.value)} value={textarea} placeholder="Leave a comment here" />

            <button type="submit" className="btn btn-primary mt-4">Submit</button> <button type="submit" className="btn btn-danger mt-4 me-5">Reset</button>
    
        </form>
    )
}

export default FormDemo1;