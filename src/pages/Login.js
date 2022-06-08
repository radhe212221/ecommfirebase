import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { _get, _post } from '../services'
import { createCookie, parseCookie, getCookie, deleteCookie, transform } from '../utils'
export default function Login() {
  const navigate = useNavigate()
  const state = useSelector(s => s)
  const dispatch = useDispatch()
  const [ob, setob] = useState(() => {
    if (getCookie("draftedLoginValues")) {
      return parseCookie("draftedLoginValues")
    }
    else {
      return {
        email: "",
        password: "",
        otp: "1234",
      }
    }
  })

  const handlechange = e => {
    const { name, value } = e.target
    setob(() => {
      boot()
      return { ...ob, [name]: value }
    })
  }

  const handleClick = () => {
    dispatch({ type: "loader.1" })
    _get("users.json")
      .then(d => {
        if (d) {
          let a = transform(d)
          if (a.some(x => x.email === ob.email && x.password === ob.password)) {
            const user = a.find(x => x.email === ob.email && x.password === ob.password)
            dispatch({ type: "login", user: user, loggedin: true })
            createCookie("user", user)
            toast(`Login successfull ${ob.email} -now redirecting to login page`)
            navigate("/")
          }
          else {
            toast(`Login failed ${ob.email} -now redirecting to signup page`)
            navigate("/Login")
          }
        }
      })
      .catch(e => toast("err" + e))
      .finally(() => {
        dispatch({ type: "loader.0" })
      })
  }
  // console.log(Object.entries(ob))
  const boot = () => {
    createCookie("draftedLoginValues", ob)
  }
  return (
    <div className='form'>
      <h1>Login</h1>
      {Object.keys(ob).map((x) => <input
        key={x}
        name={x}
        placeholder={x}
        value={ob[x]}
        onChange={handlechange} />)}
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
