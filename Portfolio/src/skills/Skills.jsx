import React, { useEffect, useState } from 'react'
import './skills.css'
const Skills = () => {
    const [count, setCount] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setCount(!count)
        }, 2000);
    }, [count])
    return (
        <div className='skills' id='skills'>
            <h3 className='skillText'>Skills</h3>
            <div className='skillContent'>
                {
                    count ? <>
                        <div><img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" /><p>HTML</p></div>
                        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" /><p>CSS</p></div>
                        <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" /><p>Java Script</p></div>
                        <div><img src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" alt="" /><p>Node</p></div>
                    </>
                        :
                        <>
                            <div><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" /><p>React</p></div>
                            <div><img src="https://yt3.googleusercontent.com/ytc/APkrFKbRsS7GX05Y9vpXUA7EX0dKwNactEKCCSypeUJY=s900-c-k-c0x00ffffff-no-rj" alt="" style={{ borderRadius: '50%' }} /><p>Chakra UI</p></div>
                            <div><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png" alt="" /><p>Bootstrap</p></div>
                            <div><img src="https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png" alt="" /><p>NPM</p></div>

                        </>
                }
            </div>
            <div className='skillText'>Tech-Stack</div>
            <div className='skillContent'>
                {
                    count ?
                        <>
                            <div><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /><p>GitHub</p></div>
                            <div><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="" /><p>VS Code</p></div>
                            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png" alt="" /><p>Replit</p></div>
                            <div><img src="https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" alt="" /><p>PostMan</p></div>
                        </>
                        :
                        <>
                            <div><img src="https://iconape.com/wp-content/png_logo_vector/git-icon.png" alt="" /><p>Git</p></div>
                            <div><img src="https://seeklogo.com/images/V/vercel-logo-F748E39008-seeklogo.com.png" alt="" /><p>Vercel</p></div>
                            <div><img src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png" alt="" /><p>Netlify</p></div>
                            <div><img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png" alt="" /><p>CodeSandBox</p></div>
                        </>
                }
            </div>
        </div>
    )
}

export default Skills
