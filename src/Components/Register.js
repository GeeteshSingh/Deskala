import {useState} from 'react'
import './styles.css'
import Requisites from "./Requisites";

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [pwdRequisite, setPWDRequisite] = useState(false);
    const [checks, setChecks] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false,
    });

    const handleOnChange = (e) => {
        setPassword(e.target.value);
    };

    const handleOnFocus = () => {
        setPWDRequisite(true);
    };

    const handleOnBlur = () => {
        setPWDRequisite(false);
    };

    const handleOnKeyUp = (e) => {
        const {value} = e.target;
        const capsLetterCheck = /[A-Z]/.test(value);
        const numberCheck = /[0-9]/.test(value);
        const pwdLengthCheck = value.length >= 8;
        const specialCharCheck = /[!@#$%^&*]/.test(value);
        setChecks({
            capsLetterCheck,
            numberCheck,
            pwdLengthCheck,
            specialCharCheck,
        });
    };
    return (
        <div className="loginScreen">
            <h2 style={{textAlign: 'center', color: '#000'}}>Register</h2>
            <form>
                <label>Email </label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email'
                    pattern="^[a-zA-Z0-9]+@gmail\.com$" required
                />
                <br/><label>Number </label>
                <input
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    type='tel'
                    placeholder='Phone Number'
                    maxLength="10"
                    required
                />
                <br/>
                <label>Password</label>
                <input
                    value={password}
                    type='password'
                    pattern='\A(?=.{8,}\z)(?=[^!@#$%^&*]*[!@#$%^&*])'
                    placeholder='Password'
                    required
                    minLength="6"
                    autoComplete='false'
                    onChange={handleOnChange}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onKeyUp={handleOnKeyUp}
                />
                <br/>
                <div style={{textAlign: 'center'}}>
                    <input className='btn' type="submit" onClick={() => (console.log('logged in'))} title='Login'/>
                </div>
            </form>
            <div className='requisite'>
                {pwdRequisite ? (
                    <Requisites
                        capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                        numberFlag={checks.numberCheck ? "valid" : "invalid"}
                        pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                        specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default RegisterScreen
