import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

const detail = () => {
    return (<Layout>

        <div className={styles.container}>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <h2>ประเภทหนังสือ</h2>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
<br></br>
ปรัชญา <br></br>
            <a href="https://www.naiin.com/product/detail/517722">
                <img  src="https://storage.naiin.com/system/application/bookstore/resource/product/202012/517722/1000238118_front_XXL.jpg?imgname=%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%8A%E0%B8%8D%E0%B8%B2:-%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9E%E0%B8%81%E0%B8%9E%E0%B8%B2-PHILOSOPHY"  width="250" height="350" ></img></a>   
                <br></br>
                สังคมศาสตร์ <br></br>
            <a href="https://www.attorney285.co.th/product/13506/%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%80%E0%B8%A3%E0%B8%B2-%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%99%E0%B8%97%E0%B8%B0%E0%B8%A5%E0%B8%B8%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B9%E0%B8%81">
                <img  src="https://c.lnwfile.com/_/c/_raw/qf/40/f0.jpg"  width="250" height="350" ></img></a>   
                <br></br>
                ศาสนา <br></br>
            <a href="https://www.attorney285.co.th/product/25462/%E0%B8%AD%E0%B8%B1%E0%B8%88%E0%B8%89%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B8%B0-100-%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%99%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88">
                <img  src="https://c.lnwfile.com/_/c/_raw/n6/fz/2v.jpg"  width="250" height="350" ></img></a>   
                <br></br>
                ภาษาศาสตร์ <br></br>
            <a href="https://thammasatpress.tu.ac.th/wp_tupress/product/%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C/">
                <img  src="https://thammasatpress.tu.ac.th/wp_tupress/wp-content/uploads/2018/05/5967-1-scaled.jpg"  width="250" height="350" ></img></a>   
                <br></br>
                วรรณคดี <br></br>
            <a href="https://www.attorney285.co.th/product/13428/%E0%B9%82%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%AA%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%83%E0%B8%99%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%84%E0%B8%94%E0%B8%B5%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2">
                <img  src="https://c.lnwfile.com/_/c/_raw/mi/t5/ap.jpg"  width="250" height="350" ></img></a>   
                <br></br>
                ประวัติศาสตร์และภูมิศาสตร์ <br></br>
            <a href="https://www.attorney285.co.th/product/17631/timeline-%E0%B8%A2%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B8%AD%E0%B8%A2%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%A5%E0%B8%81">
                <img  src="https://c.lnwfile.com/_/c/_raw/m1/si/97.jpg"  width="250" height="350" ></img></a>   
                <br></br>
                นวนิยาย <br></br>
            <a href="https://www.attorney285.co.th/product/12480/%E0%B8%84%E0%B8%B7%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B6%E0%B9%88%E0%B8%87-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%AD%E0%B8%B5%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87">
                <img  src="https://c.lnwfile.com/_/c/_raw/n4/fy/9v.jpg"  width="250" height="350" ></img></a>   
                <br></br>

        </div>
        <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>

    </Layout>)
}

export default detail