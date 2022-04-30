import {useForm} from 'react-hook-form'

export default function FormHook(){
    let {register,handleSubmit,formState:{errors}}=useForm();

    const onFormSubmit=(userObj)=>{
        console.log(userObj)
    }

    return(
        <form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
            <label htmlFor="un">Username</label>
            <input type="text" id="un" {...register('username')} className="form-control mb-3" />
            {/*username validation */}
            {errors.username?.type=== 'required' && <p className="text-danger">*Username is required</p>}
            {errors.username?.type=== 'minLenght' && <p className="text-danger">*Min-Length should be 4</p>}


            {/* password */}
            <label htmlFor="pw">Password</label>
            <input type="password" id="pw" {...register('password')} className="form-control mb-3" />
            {/*password validation */}
            {errors.password && <p className="text-danger">*Password is required</p>}

            {/*select city*/}
            <label htmlFor="ct">City</label>
            <select id="ct"  {...register('city')} className="form-select mb-3">
                <option value="hyd">Hyderabad</option>
                <option value="chni">Chennai</option>
            </select>


            <button type="submit" className="btn btn-success">Login</button>
        </form>
    )
}