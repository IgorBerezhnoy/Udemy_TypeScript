
// структура данных склада с одеждой

interface ClothesWarehouse {
  jackets: 'empty' | number;
  hats: 'empty' | number;
  socks: 'empty' | number;
  pants: 'empty' | number;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
  scissors: 'empty' | number;
  paper: 'empty' | boolean;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
  dishwashers: 'empty' | number;
  cookers: 'empty' | number;
  mixers: 'empty' | number;
}

// общая структура данных, наследует все данные из трех выше
type AllData = ClothesWarehouse & StationeryWarehouse & AppliancesWarehouse

// + добавляет свои

type TotalWarehouse = {
  deficit: boolean;
  date: Date;
} & AllData

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,date:new Date(),deficit:true
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data:TotalWarehouse):string {
  let str=`We need this items:`
  for (let key in data ){
    // @ts-ignore
    if (data[key]=="empty"){
      str+=key+", "
    }
  }

  return str.slice(0, str.length-2)+".";

}

console.log(printReport(totalData));
