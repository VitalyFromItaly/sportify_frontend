export default {
  header: 'About me',
  biometrics: {
    header: 'Biometrics',
    measurementSystems: {
      height: {
        metric: 'cm',
        usCustomary: 'foot'
      },
      weight: {
        metric: 'kg',
        usCustomary: 'pound'
      }
    },
    height: 'Your height',
    weight: 'Weight',
    birthDate: 'Date of birth',
    gender: {
      label: 'Gender',
      description: 'We need it to calculate your energy consumption on the next step. You can skip the question and we will use the average amount.',
      male: 'Male',
      female: 'Female',
      other: 'Other (or none of your business)'
    }
  }
};
