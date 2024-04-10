'use client'
import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";




export default function Carousel(){

    // const scrollers = document.querySelectorAll(".scroller");

    // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    //     addAnimation();
    // }

    // function addAnimation() {
    //     scrollers.forEach((scroller)  => {
    //         scroller.setAttribute("data-animated", true);

    //         const scrollerInner = scroller.querySelector('.scroller_inner');
    //         const scrollerContent = Array.from(scrollerInner.children);

    //         scrollerContent.forEach(item => {
    //             const duplicatedItem = item.cloneNode(true)
    //             console.log(duplicatedItem)
    //         })
    //     })
    // }

    

    return(
        <div className={styles.client__display}>
            <p className={styles.title}><Link href={'/clients'}>CLIENTS</Link></p>
            <div className={styles.scroller} >
                <div className={styles.scroller__inner}>
                <Image
                    src="/logos/elgourmetLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/dollstoreLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/eucerinLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/justaosadiaLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/lidhermaLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/mercadolibreLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/puchetaLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/elgourmetLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/dollstoreLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/eucerinLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/justaosadiaLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/lidhermaLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/mercadolibreLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                <Image
                    src="/logos/puchetaLogo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                    alt="Picture of the author"
                />
                </div>
            </div>
            {/* <button className={styles.button}>
                <p>See all clients</p>
            </button> */}
        </div>
    )

}