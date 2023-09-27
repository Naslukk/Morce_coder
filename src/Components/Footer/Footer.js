import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='sotial-media'>
            <a href="https://www.instagram.com/thenaslu/" className='icon' target='_parent'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/naslu-kk-5ab101244/" className='icon' target='_parent'><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Naslukk" className='icon' target='_parent'><i class="fa-brands fa-github"></i></a>
            </div>
            <hr/>
            <p>
                MORCE.CODER © 2023 All Rights Reserved  .
                Designed By: <a href="https://naslukk.github.io/My-Personal/" target='__parent'>Naslu kk</a>
            </p>
        </div>
    )
}

export default Footer