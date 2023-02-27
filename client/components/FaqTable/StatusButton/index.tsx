import React from 'react'
import Button from '@mui/material/Button';
interface StatusButtonProps{
    status:string
    children?: React.ReactNode;
}

const StatusButton: React.FC<StatusButtonProps> = ({status,children}) => {
  return (

    <Button sx={{backgroundColor:"rgb(76, 175, 80)",color:"rgb(0, 0, 0)",minWidth:20}} variant="contained" >{status}</Button>
  )
}

export default StatusButton