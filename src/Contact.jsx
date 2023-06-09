import React, { useState } from "react";
const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: '',
        email: "",
        msg: "",
    })
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
   
    const formSubmit = (event) => {
        event.preventDefault();
        // alert(`My name is : ${data.fullname}  My phone no is : ${data.phone} My email is : ${data.email}  My Feedback is : ${data.msg}`);
        


    }
    const postData=async(e)=>{
        e.preventDefault();

        
        
        const{fullname,phone,email,msg}=data;
        if(fullname && phone&& email&&msg){
        const res = await fetch(
            "https://animated-website-23aee-default-rtdb.firebaseio.com/contactusdatabase.json",
             {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(
                    {
                        fullname,
                        phone,
                        email,
                        msg,
                    }
                )
            }
            
        );
        if(res){
            setData({
                fullname:" ",
                phone:" ",
                email:" ",
                msg:" ",
            })
        }alert(`My name is : ${data.fullname}  My phone no is : ${data.phone} My email is : ${data.email}  My Feedback is : ${data.msg}`);
    }else{
        alert("Plz fill all the data");
    }
    }
    return (

        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit} method="POST">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" 
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone Number"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email id"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Feedback</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your generic Feedback"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    required>
                                    
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit" onClick={postData}>Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;