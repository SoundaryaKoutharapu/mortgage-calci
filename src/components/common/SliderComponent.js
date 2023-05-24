import Slider from '@mui/material/Slider';

const SliderComponent = () => {
  return (
    <Slider defaultValue={150} min={100} max={200} aria-label="Default" valueLabelDisplay="auto" />
  )
}
export default SliderComponent