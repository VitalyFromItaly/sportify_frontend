import aboutMe from './about-me/en';
export default {
  info: {
    link: 'Account settings',
    logout: 'Log out'
  },
  header: 'Account settings',
  tabs: {
    personal: 'Personal',
    system: 'Settings'
  },
  buttons: {
    fillOutForm: 'Fill out the form',
    edit: 'Edit'
  },
  newUser: {
    greetings: 'Hi there!',
    messages: [
      'We don’t know each other well yet.',
      'But we will be happy to improve your training routine if you tell us a little more about yourself.',
      'So why don’t we start?'
    ]
  },
  knownUser: {
    height: 'Height',
    weight: 'Weight',
    age: 'Age',
    goal: 'Goal',
    gender: 'Gender',
    activities: 'Activities'
  },
  gender: {
    male: 'Male',
    female: 'Female',
    other: 'None'
  },
  goal: {
    competitionPreparation: 'Competition preparation',
    muscleGain: 'Muscle gain',
    weightMaintenance: 'Weight maintenance',
    weightReduction: 'Weight reduction'
  },
  aboutMe,
  settings: {
    language: 'Language',
    russian: 'Russian',
    english: 'English',
    suggestionText: 'Got any thoughts on Sportify? Feel free to contact us.',
    commentLabel: 'A place for suggestions',
    suggestionPlaceholder: 'Type here',
    cancelButton: 'Cancel',
    submitButton: 'Send'
  },
  notices: {
    updateProfile: {
      error: {
        title: 'Error',
        content: 'An Error during updating user profile. Try again later.'
      },
      success: {
        title: 'Success',
        content: 'Profile updated.'
      }
    }
  }
};
