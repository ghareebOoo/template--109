import { Box, LinearProgress } from "@mui/material";

export default function Loading() {
  return (
    <>
    <Box sx={{with: "100%" , minHeight: "100vh" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
    <LinearProgress />
    </Box>
    </>
  )
}
