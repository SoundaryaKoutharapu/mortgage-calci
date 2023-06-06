import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';


const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {

  return (
    <Stack my={1.6}>
      <Stack spacing={1}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h6'>{unit}{amount}</Typography>
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
        label={label}
      />

      <Stack direction='row' justifyContent={'space-between'}>
        <Typography variant='caption' color='text.secondary'>{unit}{min}</Typography>
        <Typography variant='caption' color='text.secondary'>{unit}{max}</Typography>
      </Stack>
    </Stack>
  )
}
export default SliderComponent