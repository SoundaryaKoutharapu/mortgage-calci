import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';

const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {

  return (
    <>
      <Typography variant='subtitle2'>Home Value</Typography>
      <Typography variant='h6' sx={{mt:'5px'}}> $ 3000 </Typography>
      <Slider defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Typography></Typography>
    </>
  )
}
export default SliderComponent