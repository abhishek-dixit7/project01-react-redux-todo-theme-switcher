import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toggle from 'react-toggle';
import { toggleTheme } from '../features/theme/themeSlice';

function ThemeToggleButton() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(theme);
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme]);
  return (
    <div>
      <Toggle
        icons={false}
        defaultChecked={theme === 'dark'}
        onChange={() => {
          dispatch(toggleTheme());
        }}
      />
    </div>
  );
}

export default ThemeToggleButton;
