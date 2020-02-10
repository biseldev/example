import React from 'react';
import { mount } from 'enzyme';

import App from './App';

class AppModel {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  renders() {
    return this.wrapper
      .length === 1;
  }
}

describe('App', () => {
  const mountApp = props => {
    const wrapper = mount(<App {...props} />);

    return new AppModel(wrapper);
  };

  test('should render correctly', () => {
    const app = mountApp();

    expect(app.renders()).toEqual(true);
  });
});
