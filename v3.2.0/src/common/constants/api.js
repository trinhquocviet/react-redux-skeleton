import buildUrl from 'build-url';
// ---
const BASE_URL = buildUrl(process.env.REACT_APP_API);

// this block define all url link
// ? URL WITH version

// ? URL withOUT version
const API_TODOS = buildUrl(BASE_URL, { path: 'todos' });


// ? ...


export {
  API_TODOS,
};
