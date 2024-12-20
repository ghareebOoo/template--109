import { Box, CardHeader, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { Comment } from "@/types/posts.types";
import usePlaceholder from "../../assets/imgs/user.png"

export default function CommentCard({commentInfo}: {commentInfo: Comment}) {

    function handleImagePath(path:string){
        if(path.includes("undefined")) return usePlaceholder
        else return path
    }
  return (
    <>
    <Box sx={{bgcolor: "#eee" , px:3 , pb:2 , borderRadius: "8px" , my:2}}>
    <CardHeader
        avatar={
            <Image src={handleImagePath(commentInfo.commentCreator.photo)} width={50} height={50} alt={`${commentInfo.commentCreator.name} Profile image`}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={commentInfo.commentCreator.name}
        subheader={new Date(commentInfo.createdAt).toLocaleString()}
      />
      <Typography component={"p"} sx={{pl: 5}}>{commentInfo.content}</Typography>
    </Box>
    </>
  )
}
