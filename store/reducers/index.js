import { combineReducers } from 'redux';

import signInReducer from './SignInReducer';
import signUpReducer from './SignUpReducer';
import userReducer from './UserReducer';
import passwordResetReducer from './PasswordResetReducer';
import movieReducer from './MovieReducer';

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  user: userReducer,
  passwordReset: passwordResetReducer,
  movie: movieReducer
});
