import React from 'react'
import Link from 'next/link'
import Container from '../Container'
import FooterList from './FooterList'
import {MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'

function Footer() {
  return (
    <footer className='bg-slate-700 text-salte-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8 text-white'>
            <FooterList>
                <h3 className='text-base font-bold mb-2 text-white'>Shop Categories</h3>
                <Link href="#" className='text-white'>Phones</Link>
                <Link href="#" className='text-white'>Laptops</Link>
                <Link href="#" className='text-white'>Desktops</Link>
                <Link href="#" className='text-white'>Watches</Link>
                <Link href="#" className='text-white'>TVS</Link>
                <Link href="#" className='text-white'>Accessories</Link>
            </FooterList>

            <FooterList>
                <h3 className='text-base font-bold mb-2 text-white'>Shop Categories</h3>
                <Link href="#" className='text-white'>Contact Us</Link>
                <Link href="#" className='text-white'>Shopping Policy</Link>
                <Link href="#" className='text-white'>Return & Exchange</Link>
                <Link href="#" className='text-white'>FAQ</Link>
            </FooterList>

            <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                <h3 className='text-base font-bold mb-2'>About Us</h3>
                <p className='mb-2'>At our electronics stor.we are dedicated to provoding the latest and greatest dvices and accessories to our costomers.with a wide selection of phones, tvs, laptops, watches and accesories.
            </p>
            <p>
                &copy:{new Date().getFullYear()}E-SHOP. All rights reserved
            </p>
            </div>
            <FooterList>
                <h3 className='text-base font-bold mb-2 text-white'>Follow Us</h3>
                <div className='flex gap-2'>
                    <Link href="#">
                        <MdFacebook size={24}/>
                    </Link>
                    <Link href="#">
                        <AiFillTwitterCircle size={24}/>
                    </Link>
                    <Link href="#">
                        <AiFillInstagram size={24}/>
                    </Link>
                    <Link href="#">
                        <AiFillYoutube size={24}/>
                    </Link>
                </div>
            </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
