import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const clearValue = inputValue.trim()

    if (clearValue.length == 0) return

    // setCategories( oldCategories => [inputValue,...oldCategories])
    onNewCategory(clearValue)
    setInputValue('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  )
}
