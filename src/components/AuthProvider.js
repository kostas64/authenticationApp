import * as React from 'react';
import {useDispatch} from 'react-redux';

const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      } catch (e) {
        dispatch({type: 'ERROR_TOKEN', token: null});
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
    };

    bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={AuthContext}>{children}</AuthContext.Provider>
  );
};
