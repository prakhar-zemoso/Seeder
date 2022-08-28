import React from 'react'


interface LogoProps{
    src: string,
    sx?: Object
}




const Logo: React.FC<LogoProps> = ({src,sx}:LogoProps) => {
  return (
    <img src={src}/>
  )
}
export default Logo;