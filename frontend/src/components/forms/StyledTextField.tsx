import { TextField, type TextFieldProps, } from '@mui/material'
const StyledTextField = (props:TextFieldProps) => {
  return (
    <TextField id="outlined-basic"  variant="outlined" 
                   slotProps={{
                        inputLabel:{
                            shrink:true,
                        }
                    }}
                    {...props}
                   sx={{
                        width:`100%`,
                      "& label.Mui-focused": { color: 'var(--black)' },
                      
                      "& .MuiOutlinedInput-root": {
                        '& fieldset': {
                            borderColor:'var(--lightPink)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--lightPink)',
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: 'var(--lightPink)',
                        },
                      },
                    }}
                    
                     />
  )
}

export default StyledTextField