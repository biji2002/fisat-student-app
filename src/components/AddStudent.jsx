import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const[data,setData]=useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":"",
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (response)=>{
               console.log(response.data)
               if (response.data.status=="success") {
                alert("success")
                
               } else {
                alert("error")
               }
            }
        ).catch()
        }
    
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                           <label htmlFor="" className="form-label">First Name</label>
                           <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                           <label htmlFor="" className="form-label">Last Name</label>
                           <input type="text" className="form-control"  name='lastname' value={data.lastname} onChange={inputHandler} />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            
                           <label htmlFor="" className="form-label">College</label>
                           <input type="text" className="form-control"  name='college' value={data.college} onChange={inputHandler}/>



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                              
                           <label htmlFor="" className="form-label">DOB</label>
                           <input type="date" name="dob" id="" className="form-control"  value={data.dob} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Course</label>
                            <select name="course" id="" className="form-control"  value={data.course} onChange={inputHandler}>
                            <option value="MCA">MCA</option>
                            <option value="MBA">MBA</option>
                            <option value="CE">CE</option>
                            <option value="ME">ME</option>
                            <option value="EEE">EEE</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                           <label htmlFor="" className="form-label">Mobile</label>
                           <input type="text" className="form-control"  name='mobile' value={data.mobile} onChange={inputHandler} />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                           <label htmlFor="" className="form-label">Email</label>
                           <input type="text" className="form-control"  name='email' value={data.email} onChange={inputHandler} />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                           <label htmlFor="" className="form-label">Address</label>
                           <input type="text" className="form-control"  name='address' value={data.address} onChange={inputHandler} />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                           <button className="btn btn-success" onClick={readValue}>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AddStudent