import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { _get, _post } from '../services'
import { createCookie, parseCookie, getCookie, deleteCookie, transform } from '../utils'
export default function Signup() {
  const navigate = useNavigate()
  const state = useSelector(s => s)
  const dispatch = useDispatch()
  const [ob, setob] = useState(() => {
    if (getCookie("draftedSignupValues")) {
      return parseCookie("draftedSignupValues")
    }
    else {
      return {
        name: "",
        email: "",
        phone: "",
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
          if (a.some(x => x.email === ob.email)) {
            toast("user exists signup failed")
          }
          else {
            _post("users.json", ob)
              .then(d => {
                deleteCookie("draftedSignupValues")
                toast(`signup successfull ${ob.name} -now redirecting to login page`)
                navigate("/login")
              })
              .catch(e => toast(`sognup failed due to ${e}`))
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
    createCookie("draftedSignupValues", ob)
  }
  return (
    <div className='form'>
      <h1>Signup</h1>
      {Object.keys(ob).map((x) => <input
        key={x}
        name={x}
        placeholder={x}
        value={ob[x]}
        onChange={handlechange} />)}
      <button onClick={handleClick}>signup</button>
    </div>
  )
}
