import React, {Fragment} from 'react';
import { render } from 'react-dom';

const App = () => (
    <Fragment>
        <h1>React works in ASP.NET MVC! Yes!</h1>
        <div>Hello React World!!xxx!</div>
    </Fragment>
);


render(<App />, document.getElementById('app'));
