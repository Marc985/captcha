"use client";
import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"
export const Login=()=>{
    const [captcha,setCaptcha]=useState<string | null>(null)

    const onSubmit=(event:FormEvent)=>{
        event.preventDefault()
        console.log(captcha);
        
        if(!captcha){
            alert("Please verify captcha")
            return
        }
        alert("captcha verified")
    }

    return(
       <div>
             <h1 className="text-center text-2xl">Login page</h1>
             <form action="" onSubmit={onSubmit} className="border rounded-2xl mt-16 mx-auto flex flex-col gap-8 w-1/3 px-4 py-10">
                    <input type="text" placeholder="username" className="h-10 rounded-lg p-2 border"/>
                    <input type="password" placeholder="password" className="h-10 rounded-lg p-2 border"/>
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE || ""} className="mx-auto" onChange={setCaptcha}/>

                    <button className="bg-blue-600 rounded-lg h-10 text-white">Login</button>
             </form>

       </div>
    )
} 