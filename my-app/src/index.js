import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Client from "./client";

import * as ServiceWorker from "./serviceWorker";

ReactDOM.render(<Client />, document.getElementById('root'))

ServiceWorker.unregister();