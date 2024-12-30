"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Post } from '@/types/posts.types';
import Image from 'next/image';
import CommentCard from '../CommentCard/CommentCard';
import { Box, Button, Divider, TextField } from '@mui/material';
import Link from 'next/link';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function PostCard({postInfo , showAllComments= false}: {postInfo: Post , showAllComments?: boolean}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "75%" , mx: "auto" , mt: "3"}}>
      <CardHeader
        avatar={
            <Image src={postInfo.user?.photo} width={50} height={50} alt={`${postInfo.user.name} Profile image`}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={postInfo.user.name}
        subheader={new Date(postInfo.createdAt).toLocaleString()}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {postInfo.body}
          if you like.
        </Typography>
      </CardContent>
      {postInfo.image &&       <CardMedia
        component="img"
        height="250"
        image={postInfo.image}
        alt="Paella dish"
      />}
      
      <CardActions sx={{display: "flex" , justifyContent:"space-between"}}>
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="share">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Divider>Comments</Divider>
      <Box sx={{p:2}}>
      {postInfo.comments.length > 0 && !showAllComments &&  <CommentCard commentInfo={postInfo.comments[0]}/>}
      {postInfo.comments.length > 1 && showAllComments && postInfo.comments.map((comment)=><CommentCard key={comment.id} commentInfo={comment}/> )}
      {!showAllComments &&  postInfo.comments.length > 1 &&   <Button variant='contained' fullWidth sx={{my:2}}>
        <Link href={`/post/${postInfo._id}`}>
        Show More Comments
        </Link>
      </Button>}
      <TextField multiline fullWidth minRows={2} placeholder='add your comment' sx={{mt:2}}/>
      </Box>
    </Card>
  );
}
