import React from 'react'
import './InfoPage.css'
import Title from '../../component/Title'
import image from '../../Img/arf.JPG'
import 'aos/dist/aos.css'

function InfoPage() {
  return (
    <div className='InfoPage'>
        <div data-aos='zoom-in'>
            <Title item={"MATEMATIK ICIN?"}/>
        </div>
        <p data-aos="fade-up">Sentetik geometri problemlerinin cetvel ve pergel yardımıyla çözülebilirligi konusundaki yaptıgı çalısmalar,
Cisimlerin kuadratik formlarının sınıflandırılmasında ortaya çıkan degismezlere iliskin "Arf degismezi" ve "Arf halkaları" gibi 
literatürde adıyla anılan çalısmaları matematik dünyasının ünlü matematikçileri arasında yer almasını sagladı.
Matematik literatürüne "Arf Halkaları, Arf Degişmezleri, 
Arf Kapanışı" gibi kavramların yanısıra "Hasse-Arf Teoremi" ile anılan teoremler kazandırmıstır.
Cisimlerin kuadratik formlarının sınıflandırılmasında ortaya 
Alman matematikçi Helmut Hesse ile birlikte, Hesse-Arf Kuramı’nı gelistirdi.</p>
    <img src={image} alt="denklem" />
     </div>
  )
}

export default InfoPage