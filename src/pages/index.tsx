import SearchWeather from '@/components/SearchWeather';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store'; // Import your Redux store

function MainComponent() {
  return (
    <div  >
      <Provider store={store}>
        <SearchWeather />
      </Provider>

    </div>
  );
}

export default MainComponent;
