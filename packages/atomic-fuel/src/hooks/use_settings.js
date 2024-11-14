import { useContext } from 'react';
import { SettingsContext } from '../components/settings';

const useSettings = () => useContext(SettingsContext);

export default useSettings;
