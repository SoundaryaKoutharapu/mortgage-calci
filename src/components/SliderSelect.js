import SliderComponent from "./common/SliderComponent"

const SliderSelect = () => {
  return (
    <>
      <SliderComponent defaultValue={150}
        min={100}
        max={200}
        step={5}
        label='Home Value'
        unit='$'
        amount={3000}
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent defaultValue={150}
        min={100}
        max={200}
        step={5}
        label='Down Payment'
        unit='$'
        amount={300}
        onChange={(e) => console.log(e.target.value)}
      />

      <SliderComponent defaultValue={150}
        min={100}
        max={200}
        step={5}
        label='Loan Amount'
        unit='$'
        amount={1000}
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  )
}
export default SliderSelect