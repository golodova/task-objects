/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
  if (data.gender === 'female') {
    if ('age' in data) {
      delete data.age;
    }
  } else if (data.gender === 'male') {
    if (!('income' in data)) {
      data.income = 100000;
    }
  }
  return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
  const fields = new Set();
  
  [obj1, obj2, obj3].forEach(obj => {
    Object.keys(obj).forEach(key => fields.add(key));
  });
  
  return Array.from(fields).sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {

  if (typeof count !== 'number' || count <= 0) {
    return [];
  }

  const clones = [];
  
  for (let i = 0; i < count; i++) {
    // Создаём базовый клон с добавлением id
    const clone = {
      ...deepClone(obj),
      id: i + 1  // Порядковый номер начинается с 1
    };
    clones.push(clone);
  }
  
  return clones;
}

// Вспомогательная функция для глубокого клонирования
function deepClone(source) {
  if (source === null || typeof source !== 'object') {
    return source;
  }

  if (Array.isArray(source)) {
    return source.map(item => deepClone(item));
  }

  const clone = {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      clone[key] = deepClone(source[key]);
    }
  }
  
  return clone;
}


