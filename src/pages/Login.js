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


    // return <main className="h-[800px] bg-cover bg-no-repeat bg-center py-24 form-signin">
    //     <form >
    //         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    //
    //         <div className="form-floating">
    //             <input type="text" className="form-control" id="floatingInput" name="username"
    //                    onChange={e=>setUsername(e.target.value)}
    //             />
    //             <label htmlFor="floatingInput">User name</label>
    //         </div>
    //
    //         <div className="form-floating">
    //             <input type="password" className="form-control" id="floatingPassword" placeholder="password"
    //                    onChange={e=>setPassword(e.target.value)}
    //             />
    //             <label htmlFor="floatingPassword">Password</label>
    //         </div>
    //
    //         <button className="w-100 btn btn-lg btn-primary" onClick={login}>Sign in</button>
    //     </form>
    // </main>

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*<img*/}
                    {/*    className="mx-auto h-10 w-auto"*/}
                    {/*    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"*/}
                    {/*    alt="Your Company"*/}
                    {/*/>*/}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    onChange={e=>setUsername(e.target.value)}
                                    required
                                    className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={e=>setPassword(e.target.value)}
                                    className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={login}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Do not have an account?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start creating an account now
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
