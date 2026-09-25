import express, { Router } from "express";

const router = express.Router();

router.get("/signup",(req,res)=>{
    res.json({
        data:"You hit the Signup Endpoint",
       
    });


    router.get("/login",(req,res)=>{
        res.json({
            data:"You hit the login",
        })
    })
   
});


export default router;