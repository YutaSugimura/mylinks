import { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export const useAppState = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState<AppStateStatus>(appState.current);

  useEffect(() => {
    const _handleAppStateChange = (nextAppState: AppStateStatus) => {
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    };

    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  return {
    appStateVisible,
  };
};
