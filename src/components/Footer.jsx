
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function footer() {
  return (
    <Footer bgDark className='footer rounded-none'>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className='flex flex-col items-center text-left'>
            <Footer.Title title="Company" className='mr-10'/>
            <Footer.LinkGroup col>
              <Footer.Link ><Link to="/about">About</Link></Footer.Link>
              <Footer.Link ><Link to="#">Career</Link></Footer.Link>
              <Footer.Link ><Link to="#">Brand Center</Link></Footer.Link>
              <Footer.Link ><Link to="#">Blog</Link></Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className='flex flex-col items-center text-left'>
            <Footer.Title title="help center" className='mr-7'/>
            <Footer.LinkGroup col>
              <Footer.Link ><Link to="#">Discord Server</Link></Footer.Link>
              <Footer.Link ><Link to="#">Twitter</Link></Footer.Link>
              <Footer.Link ><Link to="#">Facebook</Link></Footer.Link>
              <Footer.Link ><Link to="#">Contact Us</Link></Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className='flex flex-col items-center text-left'>
            <Footer.Title title="legal" className='mr-20'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className='flex flex-col items-center text-left'      >
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex flex-col sm:items-center sm:justify-center">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 p-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default footer
