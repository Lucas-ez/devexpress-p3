import { DataGrid } from 'devextreme-react'
import { Column } from 'devextreme-react/data-grid'
import React, { useMemo } from 'react'

const FormatEj = () => {

  const saleAmountFormat = useMemo(() =>  ({ 
    style: 'currency',
    currency: 'USD',
    useGrouping: true, 
    minimumSignificantDigits: 3 ,
  }), [])

  return (
    <div>
      <DataGrid dataSource={data} >
        <Column 
          dataField='price'
          format={saleAmountFormat}
          width={100}
        />
      </DataGrid>
      <span>
        {
          new Intl.NumberFormat('ja-JP', 
          { style: 'currency', currency: 'JPY' })
          .format(1.52)
        }
      </span>
    </div>
  )
}

const data = [
  {
    price: 1.45,
  },
  {
    price: 3.55,
  },
  {
    price: 8.25,
  },
  {
    price: 2.1,
  },
  
]

export default FormatEj