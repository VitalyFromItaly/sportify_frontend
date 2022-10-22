export default {
  header: 'Обо мне',
  biometrics: {
    header: 'Биометрия',
    measurementSystems: {
      height: {
        metric: 'см',
        usCustomary: 'фут'
      },
      weight: {
        metric: 'кг',
        usCustomary: 'фунт'
      }
    },
    height: 'Ваш рост',
    weight: 'Вес',
    birthDate: 'Дата рождения',
    gender: {
      label: 'Пол',
      description: 'Нам нужна эта информация, чтобы рассчитать расход калорий на следующем шаге. Вы можете пропустить вопрос, мы возьмём среднее значение для расчёта.',
      male: 'Мужской',
      female: 'Женский',
      other: 'Другое'
    }
  }
};
