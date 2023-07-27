import './App.css';  // In GameFace.js
import './Login.css';  // In Login.js
import './Registration.css';  // In Registration.js


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
