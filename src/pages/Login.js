import axios from "axios";
import {useNavigate , useHistory} from "react-router-dom";
import {useState} from "react";

export const Login = () => {
    let navigate = useNavigate ();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let setParams = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }
    let login = () => {
        const requestOptions={
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: username,
                password: password
            }),
            redirect:'follow'
        };
        fetch('http://localhost:3030/mv-core/v1/auth/login',requestOptions)
            .then(respone => {
                console.log(respone)
                if(respone.ok){
                    return respone.json();
                }
                throw new Error(respone.status)
            })
            .then(result => {
                console.log(result)
                localStorage.setItem('accessToken', result.accessToken)
                navigate("/home",{replace:true})
            })
            .catch(error=>{
                console.log('error',error)
                alert('username, password are wrong');
            })

    }


    return <main className="h-[800px] bg-cover bg-no-repeat bg-center py-24 form-signin">
        <form >
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" name="username"
                       onChange={e=>setUsername(e.target.value)}
                />
                <label htmlFor="floatingInput">User name</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="password"
                       onChange={e=>setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" onClick={login}>Sign in</button>
        </form>
    </main>
}
