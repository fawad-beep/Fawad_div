import React from 'react'
import './docter.css'
import doc_1 from '../../assets/doc1.png'
import doc_2 from '../../assets/doc2.png'
import doc_3 from '../../assets/doc3.png'
import doc_4 from '../../assets/doc4.png'
import doc_5 from '../../assets/doc5.png'
import doc_6 from '../../assets/doc6.png'
import doc_7 from '../../assets/doc7.png'
import doc_8 from '../../assets/doc8.png'
import doc_9 from '../../assets/doc9.png'
import doc_10 from '../../assets/doc10.png'

export const Docters = () => {
  return (
    <div className='docters'>
        <div className="docter-top">
            <h1>Top Doctors to Book</h1>
            <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>


        <div className="docter-boxs">

        <div className="box">
            <div className="box-img">
        <img src={doc_1} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_2} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_3} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_4} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_5} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_6} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_10} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_7} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_8} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>
        <div className="box">
            <div className="box-img">
        <img src={doc_9} alt="" />
            </div>

            <div className="box-content">
                <li>Available</li>
                <h4>Dr. Richard James</h4>
                <p>General physician</p>
            </div>
        </div>

        </div>

    <button className='docter-btn'>More</button>

    </div>
  )
}
