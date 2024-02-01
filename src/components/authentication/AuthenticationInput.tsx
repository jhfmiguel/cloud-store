interface AuthenticationInputProps {
    inputLabel: string
    inputValue: any
    inputType?: 'text' | 'email' | 'password'
    inputRequired?: boolean
    dontRender?: boolean
    changedValue: (newValue: any) => void
}

export default function AuthenticationInput( props:AuthenticationInputProps ) {

    return props.dontRender ? null : (

        <div className="flex flex-col mt-4">
            <label>{ props.inputLabel }</label>
            <input 
                className={ `px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none` }
                type={ props.inputType ?? 'text' } 
                value={ props.inputValue }
                required={ props.inputRequired }
                onChange = { e => props.changedValue?.( e.target.value ) }
            />
        </div>

    )

}