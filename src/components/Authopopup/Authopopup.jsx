import React,{useState} from "react"
import { SyntheticEvent } from "react"
import "./Authopopup.css"
import logo from "../../assets/purplestar.png"
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import {AdapterDayjs} from 
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers';
import { ToastContainer, toast } from "react-toastify";
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
const Authopopup = () => {
    const [showsignup, setshowsignup] = useState(false)
  return (
    <div className="popup">Authopopup
        {
            showsignup?(
                <div>
                    <button onClick={()=>{setshowsignup(false)}}>Login</button>
                </div>
            ):(
                <div className='authform'>
                    <div className='left'>
                            <Image src={logo} alt="Logo" />
                    </div>
                    {/* <button onClick={()=>{setshowsignup(true)}}>Signup</button> */}
                    <div className='right'>
                            <h1>Signup to become a freak</h1>
                            <form action="">
                                <input
                                    color="warning"
                                    placeholder="name"
                                    size="lg"
                                    variant="solid"
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            name: e.target.value
                                        })
                                    }}
                                />
                                <input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"

                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            email: e.target.value
                                        })
                                    }}
                                />
                                <input
                                    color="warning"
                                    placeholder="password"
                                    size="lg"
                                    variant="solid"
                                    type='password'

                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            password: e.target.value
                                        })
                                    }}
                                />


                                <input color="warning" size="lg" variant="solid" type="number" placeholder='Weight in kg'
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            weightInKg: parseFloat(e.target.value)
                                        })
                                    }}
                                />

                                <select
                                    color="warning"
                                    placeholder="Activity Level"
                                    size="lg"
                                    variant="solid"

                                    onChange={(event,newValue) => {
                                        const value = newValue === undefined ? null : newValue.toString();
                                        setSignupFormData({
                                            ...signupformData,
                                            activityLevel: value || ''
                                        })
                                    }}
                                >
                                    <Option value="sedentary">Sedentary</Option>
                                    <Option value="light">Light</Option>
                                    <Option value="moderate">Moderate</Option>
                                    <Option value="active">Active</Option>
                                    <Option value="veryActive">Very Active</Option>
                                </select>

                                <select
                                    color="warning"
                                    placeholder="Goal"
                                    size="lg"
                                    variant="solid"

                                    onChange={(event,newValue) => {
                                        const value = newValue === undefined ? null : newValue.toString();
                                        setSignupFormData({
                                            ...signupformData,
                                            goal: value || ''
                                        })
                                    }}
                                >
                                    <Option value="weightLoss">Lose</Option>
                                    <Option value="weightMaintain">Maintain</Option>
                                    <Option value="weightGain">Gain</Option>
                                </select>

                                <select
                                    color="warning"
                                    placeholder="Gender"
                                    size="lg"
                                    variant="solid"

                                    onChange={(event,newValue) => {
                                        const value = newValue === undefined ? null : newValue.toString();
                                        setSignupFormData({
                                            ...signupformData,
                                            gender: value || ''
                                        })
                                    }}
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </select>

                                <label htmlFor="">Height</label>


                                <input color="warning" size="lg" variant="solid" type="number" placeholder='cm'
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            heightInCm: parseFloat(e.target.value)
                                        })
                                    }}
                                />


                                <label htmlFor="">Date of Birth</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}

                                >
                                    <DesktopDatePicker defaultValue={dayjs(new Date())}
                                        sx={{
                                            backgroundColor: 'white',
                                        }}

                                        onChange={(newValue) => {
                                            setSignupFormData({
                                                ...signupformData,
                                                dob: new Date(newValue)
                                            })
                                        }}
                                    />
                                </LocalizationProvider>

                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSignup()
                                    }}
                                >Signup</button>
                            </form>
                            <p>Already have an account?  <button onClick={() => {
                                setShowSignup(false)
                            }}>Login</button></p>
                        </div>
                </div>
            )
        }
    </div>
  )
}

export default Authopopup