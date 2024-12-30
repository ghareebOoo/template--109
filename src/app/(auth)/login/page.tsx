"use client";
import { useAppDispatch } from "@/hooks/store.hooks";
import { login } from "@/store/features/users.slice";
import { Button , Box , Paper , TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";



export default function Page() {

    const dispatch = useAppDispatch();
    const router =  useRouter();


    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: (values)=>{
            dispatch(login(values)).then((res)=>{
                if(res.payload.message == "success"){
                    setTimeout(()=>{
                        router.push("/")
                    } , 3000)
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
    })
  return (
   <>
   {/* البوكس عباره عن ديف */}
   <Box sx={{width: "600px" , mx: "auto" , p:2}}>
   {/* البيبر بتعمل بوكس شادو */}
    <Paper elevation={6} sx={{ p:4 , mt:5}}>   
    <form
    onSubmit={formik.handleSubmit} 
    style={{display: "flex" , flexDirection: "column" , gap:"25px" ,justifyContent: "center"}}>
    {/* ده عباره عن انبوت */}
    <TextField fullWidth variant="outlined" label="Email" type="email"
    value={formik.values.email}
    onChange={formik.handleChange}
    name="email"
    />
    <TextField fullWidth variant="outlined" label="Password" type="password"
     value={formik.values.password}
     onChange={formik.handleChange}
     name="password"
    />
    <Button type="submit" variant="contained">Login</Button>
   </form>
    </Paper>
   </Box>
   </>
  )
}
