import React from "react";
import { Avatar} from "@mui/material";

interface AvatarProps {
    src: string;
    alt: string;
}

const AvatarIcon : React.FC<AvatarProps>=({src,alt}:AvatarProps)=>{
    return(
        <Avatar
        data-testid='avatar'
        alt={alt} 
        src={src}
        sx={{height:'2rem', width:'2rem', borderRadius:3}}
        variant= "rounded"
        ></Avatar>
    )

}

export default AvatarIcon;