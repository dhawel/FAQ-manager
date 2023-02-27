import React from 'react'
import styles from "./index.module.css";
interface StatusButtonProps{
    status:string
    children?: React.ReactNode;
}

const StatusButton: React.FC<StatusButtonProps> = ({status,children}) => {


    function getButtonStyle(status:string) {
        if(status =="Published"){
           
            return `${styles.btnPublish}`
        }
        return `${styles.btn}`
    }
    let btnStyle=getButtonStyle(status)


  return (

    <button
    className={btnStyle}


    >
      {status}
    </button>
  )
}

export default StatusButton