import React from 'react'

type Props = {
  color:string,
  backgroundColor:string,
  borderRadius:number,
  text:string,
  px:string,
  py:string,
  fontSize:string,
  fontWeight:string
}

const Badge:React.FC<Props> = (props) => {

  const { color, backgroundColor, borderRadius, text, px, py, fontSize, fontWeight } = props;

  return (
    <div style={{
      backgroundColor:backgroundColor,
      borderRadius:borderRadius,
      padding:`${py} ${px}`
    }}>
      <span style={{
        color:color,
        fontSize:fontSize,
        fontWeight:fontWeight
      }}>{text}</span>
    </div>
  );
}

export default Badge;