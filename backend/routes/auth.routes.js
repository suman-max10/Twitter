import express, { Router } from "express";

const router = express.Router();

router.get("/signup",(req,res)=>{
    res.json({
        data:"You hit the Signup Endpoint",
       
    });
   
});


export default router;