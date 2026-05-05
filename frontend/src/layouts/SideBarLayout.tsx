import React from 'react'
import { Box } from '@mui/material'
import SideBar from './SideBar'
interface LayoutProps{
  children:React.ReactNode;
}
const SideBarLayout = ({children}:LayoutProps) => {
  return (
    <Box sx={{
        display:'flex',
        alignItems:'stretch',
        gap:'40px',
        width:'60%',
        height:'65%',
        
    }}>
        <SideBar/>
        <Box sx={{
          display:'flex',
          width:'100%',
        }}>
            {children}
        </Box>
    </Box>
  )
}

export default SideBarLayout