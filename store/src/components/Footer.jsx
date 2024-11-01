import React from 'react'
import AppleIcon from '../../public/icons/AppleIcon'
import GooglePlay from '../../public/icons/GooglePlay'
import Instagram from '../../public/icons/Instagram'
import Tg from '../../public/icons/Tg'
import Facebook from '../../public/icons/Facebook'
import Yt from '../../public/icons/Yt'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer-top">
                        <div className="column">
                            <h2>Biz Haqimizda</h2>
                            <p>Topshirish punktlari</p>
                            <p>Vakansiyalar</p>
                        </div>
                        <div className="column">
                            <h2>Foydalanuvchilarga</h2>
                            <p>Biz bilan bogʻlanish</p>
                            <p>Savol-Javob</p>
                        </div>
                        <div className="column">
                            <h2>Tadbirkorlarga</h2>
                            <p>Uzumda soting</p>
                            <p>Sotuvchi Kabineti</p>
                        </div>
                        <div className="column-prog">
                            <h2>Ilovani yuklab olish</h2> 
                            <span>
                            <AppleIcon/>
                            <h2>AppStore</h2>
                            <GooglePlay/>
                            <h2>Google Play</h2>
                            </span>
                            <h2>Uzum ijtimoiy tarmoqlarda</h2>
                            <span> <Instagram/> <Tg/>  <Facebook/> <Yt/> </span>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <h2>Maxfiylik kelishuvi 
                        <span>Foydalanuvchi kelishuvi</span></h2>
                        <p>«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer