import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const delivery = () => {
    return (<Layout>
        <Head>
            <title>ส่งสลิป</title>
        </Head>
        <div className={styles.container}>
            <Navbar />
            <h2> ส่งสลิป</h2>
            <br>
            </br>
            <img  src="https://www.kasikornbank.com/SiteCollectionDocuments/business/sme/digital-banking/kplusshop/functions/store/crear-qr/img/img-02.png" alt="Trulli" width="300" height="500"></img>        
  <br>
            </br>
            <a href="https://line.me/R/ti/p/%40zhv2221x"><img  src="https://cdn.icon-icons.com/icons2/846/PNG/512/Line_icon-icons.com_67183.png"  width="300" height="300" ></img></a>   
       
<div>
  <label for="formFileLg" class="form-label">ส่งสลิป</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file"/>
 
  
  <br></br>
  <br></br>
</div>






        </div>

    </Layout>)
}

export default delivery