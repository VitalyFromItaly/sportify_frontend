import aboutMe from './about-me/ru';
export default {
  info: {
    link: 'Настройки аккаунта',
    logout: 'Выйти'
  },
  header: 'Настройки аккаунта',
  tabs: {
    personal: 'Персональные',
    system: 'Системные'
  },
  buttons: {
    fillOutForm: 'Заполнить форму',
    edit: 'Редактировать'
  },
  newUser: {
    greetings: 'Привет!',
    messages: [
      'Мы ещё малознакомы.',
      'Но мы будем рады помочь тебе улучшить тренировочный процесс, если ты расскажешь немного больше о себе.',
      'Начнём?'
    ]
  },
  knownUser: {
    height: 'Рост',
    weight: 'Вес',
    age: 'Возраст',
    goal: 'Цель',
    gender: 'Пол',
    activities: 'Активности'
  },
  gender: {
    male: 'Мужской',
    female: 'Женский',
    other: 'Не указано'
  },
  goal: {
    competitionPreparation: 'Подготовка к соревнованиям',
    muscleGain: 'Набор мышечной массы',
    weightMaintenance: 'Поддержание веса',
    weightReduction: 'Снижение веса'
  },
  aboutMe,
  settings: {
    language: 'Язык',
    russian: 'Русский',
    english: 'Английский',
    suggestionText: 'Есть предложения? Свяжитесь с нами.',
    commentLabel: 'Предложение',
    suggestionPlaceholder: 'Введите текст',
    cancelButton: 'Отменить',
    submitButton: 'Отправить'
  },
  notices: {
    updateProfile: {
      error: {
        title: 'Ошибка',
        content: 'Возникла ошибка при обновлении профиля. Попробуйте позже.'
      },
      success: {
        title: 'Успешно',
        content: 'Профиль обновлен.'
      }
    }
  }
};
