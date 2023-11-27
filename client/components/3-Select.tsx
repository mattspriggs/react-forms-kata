/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

export default function SelectForm() {
  const [cars, setCars] = useState<string[]>([])
  const [selectedCar, setSelectedCar] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (selectedCar === '') {
      console.log('Select empty, cannot submit')
      return
    }

    const car = [...cars]
    car.push(selectedCar)
    setCars(car)
    setSelectedCar('')

    console.log('Submitting:', selectedCar)
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(
      'Select changed:',
      event.target.value,
      'on input:',
      event.target.name
    )
    setSelectedCar(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Selected car: {selectedCar}</p>
        <label htmlFor="car">Select a Car:</label>
        <select name="car" id="car" onChange={handleChange} value={selectedCar}>
          <option value="">--Please choose an option--</option>
          <option value="ferrari">Ferrari</option>
          <option value="aston-martin">Aston Martin</option>
          <option value="mercedes">Mercedes</option>
          <option value="alfa-romeo">Alfa Romeo</option>
        </select>
        <button>Add Car</button>
      </form>

      <h2 id="list">Cars: </h2>
      <ul aria-labelledby="list">
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </>
  )
}
