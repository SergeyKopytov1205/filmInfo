import React from "react";

const BoxOffice = React.memo(({ data, isLoading, fetchError }) => {
   
   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }

   return (
      <div>
         <h2>Бюджет и кассовые сборы</h2>
         <BoxItem title='Бюджет фильма' type='BUDGET' data={data.items} />
         <BoxItem title='Сборы в мире' type='WORLD' data={data.items} />
         <BoxItem title='Сборы в США' type='USA' data={data.items} />
         <BoxItem title='Сборы в России' type='RUS' data={data.items} />
      </div>
   )
})

const BoxItem = ({data, title, type}) => {
   return (
      <h4>
            {title}: {data?.map(item => {
               if (item.type === type) {
                  return `${item.symbol}${item.amount}`
               }
               return null
            })}
         </h4>
   )
}

export default BoxOffice