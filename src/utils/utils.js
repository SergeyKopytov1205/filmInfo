export const someDate = (data) => {
   let someDate = new Date(data)
   return someDate.toLocaleString('ru-RU', { month: 'long', day: 'numeric', year: 'numeric' })
}