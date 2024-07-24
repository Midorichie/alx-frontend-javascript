import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // Create promises for both functions
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();

  // Use Promise.all to resolve both promises concurrently
  Promise.all([uploadPhotoPromise, createUserPromise])
    .then(([uploadResponse, userResponse]) => {
      // Destructure the responses and log the required information
      const { body } = uploadResponse;
      const { firstName, lastName } = userResponse;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      // Handle any errors that occur during the promise resolution
      console.log('Signup system offline');
    });
}
