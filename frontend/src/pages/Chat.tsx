import React, { useRef } from "react";
import { Avatar, Box, Button, Icon, IconButton, Typography } from  "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const chatMessages = [
  {
    role: "user",
    content: "Hi, can you help me with my project?"
  },
  {
    role: "assistant",
    content: "Of course! Tell me a bit about your project."
  },
  {
    role: "user",
    content: "I’m building a fruit freshness detection system using sensors."
  },
  {
    role: "assistant",
    content: "That sounds interesting! Are you working with gas sensors like MQ-4 or MQ-135?"
  },
  {
    role: "user",
    content: "Yes, exactly! I’m also using a DHT11 and IR sensor."
  },
  {
    role: "assistant",
    content: "Great combination. You can log the sensor data into Firebase for live analysis."
  },
  {
    role: "user",
    content: "That’s what I planned! Can you also suggest how to show freshness stages on a dashboard?"
  },
  {
    role: "assistant",
    content: "Sure. You can map sensor values to predefined freshness ranges and display them with labels like Fresh, Edible, Spoiled."
  }
];


const Chat = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  
  const handleSubmit = async() => {
    console.log(inputRef.current?.value);}
  useEffect(() => {
    if (!auth?.user) {
      navigate("/login" );
    }
  }, [auth]);
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display:{md: "flex", xs:"none", sm:"none"},flex:0.2, flexDirection:"column", px:3,}}> 
        <Box sx={{display:"flex",width:"100%", height:"60vh", bgcolor:"rgb(17,29,39)", borderRadius:5, flexDirection:"column", mx:3,}}>
          <Avatar sx={{
            mx: "auto",
            my: 2,
            bgcolor: "white",
            color: "black",
            fontWeight: 700,
            }}>
              {auth?.user?.name ? auth.user.name[0].toUpperCase() : "U"}
              {auth?.user?.name?.split(" ")?.[1]?.[0]?.toUpperCase() || ""}
            </Avatar>
            <Typography sx={{ mx: "auto", fontFamily:"work sans"}}>
              You are talking to a ChatBot
            </Typography>
            <Typography sx={{ mx: "auto", fontFamily:"work sans",my: 4, p:3}}>
              You can ask any questions related to any field of Knowledge, Buisness, Health, Education, Sports etc, but avoid sharing personal information.
            </Typography>
            <Button sx={{ width:"200px", my:"auto", mx:"auto",color:'white', fontweight:"700", borderRadius:3, marginX:"auto",  bgcolor:red[300], "hover": {bgcolor: red.A400,},}} >
              Clear Conversation
            
            </Button>
        </Box>
      </Box>
      <Box sx={{display:"flex", flex:{md:0.8, xs:1, sm:1 }, flexDirection:"column",}}> 
        <Typography sx={{ 
          textAlign: "center",
          fontSize: "40px",
          color: "white",
          mb: 2,
          mx: "auto",}}>
          Model-GPT 3.5 Turbo
        </Typography>
        <Box sx={{width:"100%", height:"60vh",borderRadius:3,marginX:"auto", display:"flex", flexDirection:"column", overflow:'scroll', overflowX:'hidden', overflowY:'auto', scrollBehavior:'smooth', }}>
          {chatMessages.map((chat, index) => (
            //@ts-ignore
            <ChatItem content ={chat.content} role={chat.role } key={index} />
            ))}

        </Box>
        <div style={{width:"100%", padding:"20px",borderRadius:8, backgroundColor:"rgb(17,27,39)", display:"flex", margin:"auto",}}>
          <input ref={inputRef} type="text" style={{width:"100%",background:"transparent", padding:'10px', border:"none", outline:"none", color:"white", fontSize:"20px"}} placeholder="Type your message..."
        />
          <IconButton onClick={handleSubmit} sx={{ml:"auto", color:"white"}}><IoMdSend /></IconButton>
           
        </div>
      </Box>
    </Box>
  );
};
export default Chat;