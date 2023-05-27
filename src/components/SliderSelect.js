import SliderComponent from "./common/SliderComponent"

const SliderSelect = () => {
  return (
    <> 
    <SliderComponent defaultValue={150} 
    min={100} 
    max={200}
    step ={5}
    onChange={(e)=> console.log(e.target.value)}
    />
    </>
  )
}
export default SliderSelect