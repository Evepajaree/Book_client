import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

import Link from 'next/link'


const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>เกี่ยวกับเรา</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <h1>เกี่ยวกับเรา</h1>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
                <br />
                <div>
                    <div className={styles.box} >
                    <br></br>  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     ทางร้านมีหนังสือหลากหลายประเภท ทั้งด้านปรัชญา ศาสนา สังคมศาสตร์ ภาษาศาสตร์ วรรณคดี ประวัติศาสตร์และภูมิศาสตร์<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หนังสืออ้างอิง หนังสืออ้างอิงภาษาอังกฤษ นวนิยาย เรื่องสั้น ศิลปกรรมและการบันเทิง เบ็ดเตล็ดหรือความรู้ทั่วไป <br />

                    <br></br>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>

                    
                    </div>
                    <br />
                    <br/><br/>
                    <img  src="https://c.lnwfile.com/_/c/_raw/uw/ue/az.jpg" alt="Trulli" width="250" height="350"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://c.lnwfile.com/_/c/_raw/v4/v2/jl.jpg" alt="Trulli" width="250" height="350"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://storage.naiin.com/system/application/bookstore/resource/product/202004/503267/1000232394_front_XXL.jpg?imgname=%E0%B8%95%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%84%E0%B8%94%E0%B8%B5%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A5%E0%B8%B0%E0%B8%84%E0%B8%A3" alt="Trulli" width="250" height="350"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    <img  src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786168293522.jpg" alt="Trulli" width="250" height="350"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://img.my-best.in.th/press_component/item_part_images/6bb6777e2d51d015f241b629434d2443.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip" alt="Trulli" width="250" height="350"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786160453375.jpg" alt="Trulli" width="250" height="350"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    ติดต่อเราได้ที่<br></br>
                    เบอร์โทรศัพท์ 083-394-9319<br></br>
                    Facebook : Peejara Pajaree<br></br>
                    Lind Id : @zhv2221x<br></br>
                    <img  src="https://img.icons8.com/bubbles/2x/facebook-new.png"  width="50" height="50"></img> 
                    <img  src="https://i.pinimg.com/originals/2f/8b/6b/2f8b6be58b676791c6948de91ef4fd00.png"  width="50" height="50"></img>
                    <img  src="https://img.icons8.com/bubbles/2x/instagram.png"  width="50" height="50"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    </div>
                  <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    <div>
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
