import Script from 'next/script'
import Layout from '../components/template/Layout'

import MenuBar from '../components/page/MenuBar'

export default function Home() {
  return (
    <div>

      <Layout title='Cloud Storage' subtitle='Source Code is available on Github'>

        <MenuBar />

        <Script src="back-end/controller/CloudStorageController.js"/>
        <Script src="back-end/index.js"/>
      
      </Layout>

    </div>
    
  )
}
