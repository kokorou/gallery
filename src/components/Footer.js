import React from 'react';
import FooterCol from './FooterCol';
import '../CSS/footer.css'

export default function Footer() {
    return (
        <div className="ftcontainer">
            <div className="fontainer">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Gallery Weeelb</h1>
                    <p>
                        A website to show photographs.
                    </p>
                </div>
                <div className="footer__col2">
                    <FooterCol heading="Sitemap"
                    links={[
                        {
                            title:'Selected',
                            path:'./',
                            type:'Link'
                        },
                        {
                            title:'Timelink',
                            path:'./timeline',
                            type:'Link'
                        },
                        {
                            title:'Vlog',
                            path:'./vlog',
                            type:'Link'
                        },
                        {
                            title:'Track',
                            path:'./track',
                            type:'Link'
                        },
                        {
                            title:'Collection',
                            path:'./collection',
                            type:'Link'
                        },
                        {
                            title:'About',
                            path:'./about',
                            type:'Link'
                        },
                    ]}/>
                </div>
                <div className="footer__col3">
                    <FooterCol 
                    heading = "Weeelb"
                    links = {[
                        {
                            title: 'Home',
                            path: 'https://weeelb.com',
                        },
                        {
                            title: 'Portfilio',
                            path: 'https://portfolio.weeelb.com',
                        },
                        {
                            title: 'Gallery',
                            path: 'https://gallery.weeelb.com',
                        },
                        {
                            title: 'Blog(developing)',
                            path: 'https://blog.weeelb.com',
                        },
                        {
                            title: 'Search',
                            path: 'https://www.weeelb.com/search',
                        },
                    ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol 
                    heading="Social Links"
                    links={[
                        {
                            title: 'Instagram',
                            path:'#',
                        },
                        {
                            title: 'Twitter',
                            path:'#',
                        },
                        {
                            title: 'Youtube',
                            path:'#',
                        },
                        {
                            title: 'Bilibili',
                            path:'#',
                        },
                        {
                            title: 'Weibo',
                            path:'#',
                        },
                    ]}
                    />
                </div>
            </div>
        </div>
    )
}