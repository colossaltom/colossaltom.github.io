//import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import SmoothScroll from 'smooth-scroll'
//import '../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



import './App.css'


import imgGithub   from './assets/github-142-svgrepo-com.svg'
import imgLinkedin from './assets/linkedin-svgrepo-com.svg'
//import imgIndeed   from './assets/indeed-svgrepo-com.svg'


//import bg from './assets/Picture__87.jpg'
import imgMe from './assets/about/imgMe.jpg'
import imgLogo from './assets/about/251112 resume logo web.png'


import imgLeek       from './assets/dev/com.live2d.miku/light-icon web.gif'
import imgMiku       from './assets/dev/com.live2d.miku/Screenshot.png'
import imgBarThumb   from './assets/dev/barshrimp/dark-icon web.gif'
import imgBar        from './assets/dev/barshrimp/Sample.png'
import imgJobsThumb  from './assets/dev/jobmenu/applet_256x256x32.png'
import imgJobs       from './assets/dev/jobmenu/Screenshot 2025-10-28 at 11.02.43 2.png'
import imgProofThumb from './assets/dev/proofcreation/applet_256x256x32.png'
import imgProof      from './assets/dev/proofcreation/proof app screenshot crop.png'

import imgMLogoThumb from './assets/music/logo/230211 logo thumb.png'
import imgMLogo from './assets/music/logo/230211 eva logo edit web.png'
//import imgStreamThumb from './assets/music/ui/stream.jpg'
import imgStream from './assets/music/ui/stream.jpg'

import imgDestroyers from './assets/art/destroyers/BCDestroyers Logo_web.png'
import imgPawsome from './assets/art/salty/Pawsome.png'
import imgTongue from './assets/art/salty/TonguesOutWeb.png'
import imgSHThumb from './assets/art/photo/SHAmandaThumb2.jpg'
import imgSH from './assets/art/photo/SHAmandaWeb.jpg'
import imgRunFree from './assets/art/photo/runFreeWeb.jpg'
import imgBrandThumb from './assets/art/Branding/3 Web.jpg'
import imgBrand1 from './assets/art/Branding/boards web.jpg'
import imgBrand2 from './assets/art/Branding/boards2 web.jpg'
import imgBrand3 from './assets/art/Branding/boards3 web.jpg'





window.onload=()=>{
    var scroll = new SmoothScroll('a[href*="#"]'); scroll;
}






const titleBar=<><a href='https://github.com/colossaltom/colossaltom.github.io'>Colossaltom Portfolio 2026</a>&ensp;||&ensp;
<a href='https://github.com/colossaltom'><img src={imgGithub} className='icon'  /></a> &ensp;
<a href='www.linkedin.com/in/tldesign'><img src={imgLinkedin} className='icon'  /></a> &ensp;
{/*<a href=''><img src={imgIndeed} className='icon'  /></a> &ensp;*/}
</>

const mediums=[
    {name:"ABOUT",
     projects:[
        {name:"Author",
         image:imgLogo,
         postings:[
            {image:imgMe, text:(<>
                <caption>App Developer | Designer | Illustrator</caption>
                <p>
                    <img src={imgLogo} style={{width:"15%", float:"inline-start"}} />Hello I'm Thomas. I have been a graphic artist with experience in creating software solutions to streamline workflows. In my spare time I am a professional musician and used to find routing and exploits in the speedrunning community.
                    <br />
                    <br />
                    Don't forget to check out my professional links at the top to contact me and inspect the page since I created it myself.
                </p>
            </>)},
        ]},
    ]},
    {name:"DEV",
     projects:[
        {name:"Illustrator Proof Launcher",
         image:imgProofThumb,
         postings:[
            {image:imgProof, text:(<>
                <caption>Created entirely using Adobe ExtendScript (ES3 +XML)</caption>
                <p>This was a major side project that adds an input form into illustrator that can import data directly from xml and css. It was a project that I picked up and learned by completely rewriting it from scratch entirely in Adobe ExtendScript. It drastically reduced the number of errors and time spent entering in data by hand. Some of the best features include:</p>
                <ul>
                    <li>Import that excepts xml or css formatted saves from external software / exports a save history and defaults</li>
                    <li>Automatic building of part folder including spec files and artwork</li>
                    <li>Modular to allow multiple layouts and adding additional setup scripts into one place</li>
                    <li>Loads csv data to allow non technical users to add in custom materials in an easy to understand way</li>
                    <li>Layout is determined via layer names in a template document so graphic users can edit layouts</li>
                    <li>Warnings and errors help users to track out of range specs</li>
                    <li>Number boxes allow arithmetic using any measurement type</li>
                    <li>Unlimited number of parts created in parallel</li>
                    <li>Real time artboard updates to see what the document looks like</li>
                    <li>Commandline mode to allow for full automation in the future</li>
                    <li>Automatic detection of several known bugs in Adobe software on run</li>
                </ul>
            </>)},
        ]},
        {name:"Barcode Generator",
         image:imgBarThumb,
         postings:[
            {image:imgBar, text:(<>
                <caption>Illustrator Plugin using bolt-cep and OrcaScan</caption>
                <p>Using Orcascan API I created a plugin to import the barcode directly into illustrator. This simple menu comes with a number of extra features like check digit autocomplete, vector svg support, realtime updating with request timeout to not overload the webpage, and clean easy to use functions in order to add in variable barcode support in the future</p>
            </>)},
        ]},
        {name:"Job Processing Menu",
         image:imgJobsThumb,
         postings:[
            {image:imgJobs, text:(<>
                <caption>Fast action menu</caption>
                <p>This is a collection of automated actions built for specific tasks grouped together using the default shortcuts.app selection allowing them to be run from inside of unlimited job folders all at once often saving hundreds of clicks in menuing translating to hours of work. These actions include a mix of JXA, AppleScript, bash, and Adobe ExtendScript and follows a specified job folder structure.</p>
                <p>Other automated tasks include:</p>
                <ul>
                    <li>A replacement of legacy variable software that exports to a press proprietary binary format</li>
                    <li>Preflighting pdf hot folder that exports a spec and compatibility report along with basic prepress changes</li>
                    <li>Created an Illustrator function to add in the ability to check for missing fonts and existing color books</li>
                    <li>Node solution for organizing retained jobs, eliminating duplicate, and making a windows compatible fast search index</li>
                </ul>
            </>)},
        ]},
        {name:"Live2d in Illustrator",
         image:imgLeek,
         postings:[
            {image:imgMiku, text:(<>
                <caption>Created using bolt-cep and Live2dOnWeb</caption>
                <p>My first Illustrator plugin was a port of live2d web display inside of an Illustrator panel. It doesn't do much other than follow the mouse and delver generic phrases but this is perfect decoration for any vocaliod fan</p>
            </>)},
        ]},
    ]},
    {name:"ART",
     projects:[
        {name:"Branding",
         image:imgBrandThumb,
         postings:[
            {image:imgBrandThumb, text:(<>
                <caption>e#Music</caption>
                <p>e#Music is a brand that I created in school that sells the newest technology in music. Every aspect of the companies brand rules was compiled into both a book and webpage</p>
            </>)},
            {image:imgBrand3, text:(<>
                <caption>Store sign types</caption>
                <p>Each sign was designed to physically lead the customer to a section via the attached diode.</p>
            </>)},
            {image:imgBrand1, text:(<>
                <caption>Pictograms Studio Colors</caption>
                <p>An array of pictograms were created to cover all of the store sections. Each symbol is available in 2 layouts and an array of colors within theme. The top display is a scrollable store view used in the web page while the bottom row is the array of pictograms</p>
            </>)},
            {image:imgBrand2, text:(<>
                <caption>pictograms live colors</caption>
                <p>A contrasting warm pallet was chosen to create a late night show theme.</p>
            </>)},
        ]},
        {name:"Digital Art",
         image:imgDestroyers,
         postings:[
            {image:imgDestroyers, text:(<>
                <caption>Destroyers logo</caption>
                <p>I enjoy creating still graphics with a sense of motion. This was a request by a seasonal kids soccer team for a logo perfect for the sort of fun images that fit my drawing style.</p>
            </>)},
        ]},
        {name:"Stickers",
         image:imgTongue,
         postings:[
            {image:imgTongue, text:(<>
                <caption>Dog Tongue Sticker</caption>
                <p>Sticker sample of my digital art based entirely on the saying in the sticker.</p>
            </>)},
            {image:imgPawsome, text:(<>
                <caption>Pawsome Sticker</caption>
                <p>Sticker sample of my digital art based entirely on the saying in the sticker.</p>
            </>)},
        ]},
        {name:"Photography",
         image:imgSHThumb,
         postings:[
            {image:imgSH, text:(<>
                <caption>Recolored Horror Photo</caption>
                <p>This was originally the cover photo for a horror based photography series.</p>
            </>)},
            {image:imgRunFree, text:(<>
                <caption>Parkour Cover Photo</caption>
                <p>This was the cover photo for a Parkour based photography series.</p>
            </>)},
        ]},
    ]},
    {name:"MEDIA",
     projects:[
        {name:"Musical Ensemble",
         image:imgMLogoThumb,
         postings:[
            {image:imgMLogo, text:(<>
                <caption>Logo inspired by Akihiko Yoshida's art in Final Fantasy</caption>
                <p>I manage a musical group that performs covers of gaming music in unique new styles. I am responsible for much of the design, scheduling, streaming, project management, and social media. We've worked with many other artists and jump on any opportunity to open and promote national groups on tour through the area.</p>
            </>)},
        ]},
        {name:"Stream UX",
         image:imgStream,
         postings:[
            {image:imgStream, text:(<>
                <caption>Screen grab of setup before weekly stream</caption>
                <p>This is the streaming interface I designed in the style of modern JRPG menuing. The song selection for the set list is on the left and current musicians on the right complete with loading screens added to prevent dead air while staying on theme</p>
            </>)},
        ]},
    ]},
]




function App() {

    let theHTML = (<>
    <ParallaxProvider><div>
        <header style={{position:"sticky", top:0, textAlign:"left", zIndex:2}}>
            <h3 className='txtBox' >{titleBar}</h3>
        </header>
        <br id="top" />
        <br />
        <main style={{display:"flex", flexFlow:"nowrap", clear:"both", width:'100%', height:"100%"}}>


            {/* main navigation */}
            <div id="nav" style={{float:"left", width:"10%", minWidth:"100px", height:"100%"}}>
                <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, 9900]} className='txtBox' >
                {/*<Parallax translateY={[-10000, 5000]} className='txtBox' >*/}
                    {mediums.map ((medium)=><a key={medium.name} href={"#"+medium.name}><h2>{medium.name}</h2><br /></a>)}
                    <a href="#top" style={{display:'flex'}}><h2>TOP &uarr;</h2><br /></a>
                </Parallax>
            </div>


            {/* project selection */}
            <div style={{float:"left", padding:"0 0px", width:"90%"}}>
            <div id="menu" style={{float:"left", padding:"0 0px", width:"33%"}}>
                <Parallax shouldAlwaysCompleteAnimation={true} translateY={[-0.5, 382]}  className='txtBox' style={{margin:"5pt"}} >
                    {mediums.map ((medium)=>
                    {
                        return (<>
                            <br />
                            <a href={"#"+medium.name}><h4>{medium.name}</h4></a>
                            <hr />
                            {medium.projects.map ((project)=>
                            {
                                return (<a key={project.name} href={"#"+project.name} style={{display:"flex"}}>
                                    <LazyLoadImage effect='blur' src={project.image} style={{width:"60%"}} />
                                    <h5>{project.name}</h5>
                                </a>)
                            })}
                        </>)
                    })}
                </Parallax>
            </div>


            {/* project view */}
            <div id="section" style={{float:"left", width:"66%"}}>
                <Parallax className='txtBox' >
                    {mediums.map ((medium)=>
                    {
                        return (
                        <>
                            <br />
                            <a id={medium.name}>
                              <h4>{medium.name}</h4>
                            </a>
                            <hr style={{color:"white", width:"50%"}} />
                            {medium.projects.map ((project)=>
                            {
                                return (
                                <>
                                    
                                    <article>
                                    <h5 id={project.name}>{project.name}</h5>
                                    {project.postings.map ((posting)=>
                                    {
                                        return (
                                        <>
                                            <LazyLoadImage effect='blur' src={posting.image} style={{position:"relative", clear:"both", maxHeight:"75vh", maxWidth:"stretch"}} />
                                            <section>
                                                {posting.text}
                                                <hr style={{border:"2px solid #ffffff29", borderRadius:"2px", width:"100%"}} />
                                            </section>
                                        </>)
                                    })}
                                    </article>
                                </>)
                            })}
                        </>)
                    })}
                </Parallax>
            </div>
            </div>
        </main>
        <footer>
            <a style={{color:"black"}} href="https://www.vecteezy.com/free-photos/ocean">Ocean Stock photos by Vecteezy</a>
        </footer>
    </div>
</ParallaxProvider>
    
    </>)

  return theHTML

}

export default App
