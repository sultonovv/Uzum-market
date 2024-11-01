import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Logo from '../../public/icons/logo'
import LocationIcon from '../../public/icons/LocationIcon'
import Search from '../../public/icons/Search';
import SignIn from '../../public/icons/SignIn';
import Heart from '../../public/icons/Heart';
import Korzina from '../../public/icons/Korzina';


function Header() {

    const [categories, setCategories] = useState([])

    function getCategories(){
        fetch('https://5709cdd829da4f5e.mokky.dev/categories').then(function(response){
            return response.json()
        }).then(function(data){
            setCategories(data)
        }).catch(function(err){
            console.log(err, 'Error')
        })
    }

    useEffect(()=> {
        getCategories()
    }, [] )

    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-top">
                       <div className='left'>
                       <LocationIcon/>
                       <p>Shahar: <span className='under'>Toshkent</span></p>
                       <p>Topshirish Punktlari</p>
                       </div>
                       <div className='right'>
                        <Link className='buy'>Uzumda Soting</Link>
                        <Link to='/faq'>Savol-Javoblar</Link>
                        <Link >Buyurtmalarim</Link>
                        <span>

                        <img src="/images/uz-flag.png" width={24} height={24} alt="flag" />
                        O'zbekcha
                        </span>
                       </div>
                    </div>
                    <div className="header-bottom">
                        <Link to='/'><Logo/></Link>
                        
                            <button> <img src="/images/pajamas--catalog-checkmark.png" width={24} height={24} alt="" /> Katalog </button>                            
                            <div className="input">
                                <input type="text" placeholder='Mahsulotlar va turkumlar izlash' />
                                <button> <Search/></button>
                            </div>
                            <div className="pages">
                               <span>
                               <SignIn/>
                                <Link to='/sign'>  Kirish</Link>
                                </span> 
                                <Link to='/saved'>
                                <span>
                                <Heart/> 
                                 Saralangan
                                </span>
                                </Link>
                                <Link to='/cart'>
                                <span>
                                <Korzina/>
                                 Savat
                                </span>
                                </Link>
                            </div>
                    </div>
                    <div className="header-categories">

                        {
                            categories.map(item=> item.image ?.length >0 ? (
                                <p>
                                    <img src={item.image} height={24} width={24} alt={item.name} />
                                   <Link to="/categories"><span>{item.name}</span></Link> 
                                </p>

                            ) : (
                                <Link className='link' to='/categories'>{item.name}</Link>
                            )
                        )
                        }
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header