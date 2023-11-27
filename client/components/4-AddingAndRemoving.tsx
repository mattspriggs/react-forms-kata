/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

type Item = {
  name: string
  id: string
}

export default function AddingAndDeletingForm() {
  const [list, setList] = useState<Item[]>([])
  const [item, setItem] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newItem: Item = {
      name: item,
      // uuid() generates a unique id
      id: uuid(),
    }
    const newList = [...list]
    newList.push(newItem)
    setList(newList)
    setItem('')
    console.log('Submitting item:', newItem)
  }

  const handleDelete = (id: string) => {
    console.log('Delete item with id:', id)
    const newList = [...list]
    const deleteList = newList.filter((item) => item.id !== id)
    setList(deleteList)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setItem(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={handleChange}
        />
        <button>Add Item</button>
      </form>

      <h2 id="list">Items: </h2>
      <ul aria-labelledby="list">
        {list.map((listItem, index) => (
          <li key={index}>
            {listItem.name}{' '}
            <button onClick={() => handleDelete(listItem.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
