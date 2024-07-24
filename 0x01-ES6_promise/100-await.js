import uploadPhoto from './5-photo-reject';
import createUser from './4-user-promise';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('profile.jpg');
    const user = await createUser('Guillaume', 'Salva');

    console.log('Photo:', photo);
    console.log('User:', user);

    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      photo: null,
      user: null,
    };
  }
}

