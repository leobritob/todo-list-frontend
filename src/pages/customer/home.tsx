import React, { useCallback, useState } from 'react'

import { Button, ProductsList } from 'components'

const defaultProducts = [
  {
    name: 'Camiseta',
    sizes: [{ name: 'P' }, { name: 'M' }, { name: 'G' }],
    price: 0,
  },
  { name: 'Calca Jeans', price: 10 },
  { name: 'Oculos', price: 99 },
]

export const CustomerHomePage: React.FC = () => {
  const [products, setProducts] = useState(defaultProducts)

  const handleButtonOnClick = useCallback(() => {
    const newProductList = [...products]
    newProductList.push({ name: 'Moletom', price: 129 })

    setProducts(newProductList)
  }, [products])

  const handleOnRemove = useCallback(
    (index: number) => {
      let newProductList = [...products]
      newProductList = newProductList.filter((item, i) => i !== index)

      setProducts(newProductList)
    },
    [products]
  )

  return (
    <div id="Div-App">
      <h1>Bem-vindo(a), Customer!</h1>
      <Button onClick={handleButtonOnClick}>Adicionar mais produtos</Button>
      <ProductsList products={products} onRemoveProduct={handleOnRemove} />
      <Button>Finalizar Compra</Button>
    </div>
  )
}
