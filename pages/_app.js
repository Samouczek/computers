import '../styles/globals.css';
import '../styles/button.css'
import '../styles/colors.css';
import Layout from '../components/layout/Layout';

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
