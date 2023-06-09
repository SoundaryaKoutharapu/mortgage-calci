import SliderComponent from "./common/SliderComponent"


const SliderSelect = ({ data, setData }) => {
  // console.log(data);
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        step={100}
        label='Home Value'
        unit='$'
        value={data.homeValue}
        amount={data.homeValue}
        onChange={(e, value) => setData({ homeValue: value })}
      />

      <SliderComponent defaultValue={data.downPayment}
        min={100}
        max={data.homeValue}
        step={100}
        label='Down Payment'
        unit='$'
        value={data.downPayment}
        amount={data.downPayment}
        onChange={(e, value) => setData({downPayment: value})}
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

      <SliderComponent defaultValue={150}
        min={100}
        max={200}
        step={5}
        label='Interest Rate'
        unit='$'
        amount={1000}
        onChange={(e) => console.log(e.target.value)}
      />

    </>
  )
}
export default SliderSelect