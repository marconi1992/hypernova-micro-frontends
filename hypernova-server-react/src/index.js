import hypernova from 'hypernova/server';
import { renderReact } from 'hypernova-react';

import Header from './components/Header';

hypernova({
  devMode: true,
  getComponent(name) {
    if (name === 'Header') {
      return renderReact(name, Header);
    }

    return null;
  },
  port: 3031,
});
