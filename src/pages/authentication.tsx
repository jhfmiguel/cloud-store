import '../../src/app/globals.css'

import { SetStateAction, useState } from "react"

import AuthenticationInput from "../components/authentication/AuthenticationInput"
import { Warning } from '@/components/icons'

export default function Authentication() {

    const [ error, setError ] = useState( null )
    const [ mode, setMode ] = useState< 'login' | 'register' >( 'login' )
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )

    function showError( msg: any, time = 5 ) {
        setError( msg )
        setTimeout(() => setError( null ), time * 1000)
    }

    function inputSubmit() {
        if( mode === 'login' ) {
            console.log('login')
            showError( 'Login Fatal Error!', 2 )
        } else {
            console.log('register')
            showError( 'Register Fatal Error!' )
        }
    }

    return (
        <div className={ `flex h-screen items-center justify-center` }>
            <div className={ `hidden md:block md:w-1/2 lg:w-2/3` }>
                <img
                    src="https://source.unsplash.com/random"
                    alt="Authentication Page Image"
                    className={ `h-screen w-full object-cover` }
                />
            </div>
            <div className={ `w-full md:w-1/2 lg:w-1/3 m-10` }>
                <h1 className={`text-xl font-bold mb-5`}>
                    { mode === 'login' ? 'Enter your information' : 'Register your information' }
                </h1>

                { error ? (

                <div className={ `flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg` }>
                    { Warning() }
                    <span className={ `ml-3` }>{ error }</span>
                </div>

                ) : false

                }

                <AuthenticationInput
                    inputLabel="E-mail"
                    inputType="email"
                    inputValue={ email }
                    inputRequired
                    changedValue={ setEmail }
                />
                <AuthenticationInput
                    inputLabel="Password"
                    inputType="password"
                    inputValue={ password }
                    inputRequired
                    changedValue={ setPassword }
                />
                <button
                    onClick={ inputSubmit }
                    className={ `w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6` }
                >
                    { mode === 'login' ? 'Login' : 'Register' }
                </button>
                <hr className={ `my-6 border-gray-300 w-full` }  />
                <button
                    onClick={ inputSubmit }
                    className={ `w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3` }
                >
                    Google Login
                </button>

                { mode === 'login' ? (
                    <p className={ `mt-8` }>
                        New Here?
                        <a 
                            onClick={() => setMode( 'register' )}
                            className={ `text-blue-500 hover:text-blue-700 font-semibold cursor-poiter` }
                        >
                            Create an account for free!
                        </a>
                    </p>
                ) : (
                    <p className={ `mt-8` }>
                    Are you already part of our community?
                    <a 
                        onClick={() => setMode( 'login' )}
                        className={ `text-blue-500 hover:text-blue-700 font-semibold cursor-poiter` }
                    >
                        Enter your credentials!
                    </a>
                </p>
                )
            }

            </div>
        </div>
    )
}