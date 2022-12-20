import React, { useEffect } from 'react'
import './ContentPage.css'
import { BsCheck2All } from "react-icons/bs";
import Title from '../../component/Title'
import img1 from '../../Img/arf1.jpeg'
import img2 from '../../Img/cahit-arf.jpg'
import img3 from '../../Img/arf2.jpg'
import img4 from '../../Img/ontl.jpg'
import img5 from '../../Img/arf4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Content() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className='contentPage'>
      <div data-aos='zoom-in'>
      <Title item={"HAYATI?"} />
      </div>
      <div className='content'>
        <div className='content-img'>
          <div class="grid-item1 grid-itemeffeckt" data-aos='fade-right'>
            <img src={img1} alt='resim' />
          </div>
          <div class="grid-item2 grid-itemeffeckt" data-aos='fade-right'>
            <img src={img2} alt='resim' />
          </div>
          <div class="grid-item3 grid-itemeffeckt" data-aos='fade-left'>
            <img src={img3} alt='resim' />
          </div>
          <div class="grid-item4 grid-itemeffeckt" data-aos='fade-right'>
            <img src={img4} alt='resim' />
          </div>
          <div class="grid-item5 grid-itemeffeckt" data-aos='fade-left'>
            <img src={img5} alt='resim' />
          </div>
        </div>
        <div className='content-cv'>
          <table>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Istanbul Bebek'te vefat etti.</td>
              <td>1997</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Fransa'da Commandeur des Palmes Académiques Ödülü</td>
              <td>1994</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Türkiye Bilimler Akademisi Seref Üyeligi</td>
              <td>1993</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Türk Matematik Dernegi başkanlıgı</td>
              <td>1983-1989</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> ODTÜ'nün onur doktorası</td>
              <td>1981</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> ITÜ ve KATÜ Onur Doktorası</td>
              <td>1980</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> TÜBITAK Bilim Ödülü</td>
              <td>1974</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> TÜBITAK'ın Bilim Kurulu başkanlıgı</td>
              <td>1963-1971</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Ordinaryüs profesör</td>
              <td>1955</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Inönü Ödülü</td>
              <td>1943</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Profesör</td>
              <td>1943</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Göttingen Üniversitesi'nde doktora</td>
              <td>1938</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Istanbul Üniversitesi Fen Fakültesi'nde
                profesör yardımcısı</td>
              <td>1933</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Galatasaray Lisesi'nde matematik
                öğretmenligi</td>
              <td>1932</td>
            </tr>
            <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <td className='info'> <BsCheck2All/> Selanik'te doğdu</td>
              <td>1910</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Content