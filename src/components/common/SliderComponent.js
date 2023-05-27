import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';


const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {

  return (
    <>
      <Stack spacing={1}>
        <Typography variant='subtitle2'>Home Value</Typography>
        <Typography variant='h6'> $ 3000 </Typography>
      </Stack>
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
      <Stack direction='row' spacing={50}>
      <Typography color='text.secondary'>$1000</Typography>
      <Typography color='text.secondary'>$10000</Typography>
      </Stack>
    </>
  )
}
export default SliderComponent