export const getTranslatedDate = (data) => {
   let someDate = new Date(data)
   return someDate.toLocaleString('ru-RU', { month: 'long', day: 'numeric', year: 'numeric', hour: "numeric", minute: "numeric" })
}

export const getNextMonth = () => {
   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   let currentYear = new Date().getFullYear()
   let currentMonth = new Date().getMonth()

   const data = {
      year: (currentMonth === 11 ? ++currentYear : currentYear).toString(),
      month: monthNames[currentMonth === 11 ? 0 : ++currentMonth].toUpperCase()
   }
   return data
}

export default function translateProffession(string) {
   switch (string) {
      case 'DIRECTOR':
         return 'Режиссер'
      case 'ACTOR':
         return 'Актер'
      case 'DESIGN':
         return 'Дизайнер'
      case 'EDITOR':
         return 'Редактор'
      case 'HIMSELF':
         return 'Играет самого себя'
      case 'HRONO_TITR_MALE':
         return 'В титрах'
      case 'OPERATOR':
         return 'Оператор'
      case 'PRODUCER':
         return 'Продюсер'
      case 'WRITER':
         return 'Сценарист'
      case 'COMPOSER':
         return 'Композитор'
      default:
         return string
   }
}

export const handleOnChangeCheckBox = (event, array, setArray) => {
   let newArr = [...array, event.target.id]
   if (array.includes(event.target.id)) {
      newArr = newArr.filter(item => item !== event.target.id);
   }
   setArray(newArr)
}