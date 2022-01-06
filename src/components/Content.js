import React from "react";
import '../styles/ContentStyles.css'


function Content() {


    return (
        <div className="Content_Container">

            <style>
            @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Roboto:wght@300&family=Varela+Round&display=swap');
            </style>

            
            <div className="post_and_email_container">

                <div className="post_and_email_container_articles">

                    <div className="article_one_container">

                        <div className="article_one_container_top">

                            <img className="animated_image" alt="pic_of_face" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/02f1a620-e734-45d9-a51f-a9bff732af38/luis-200x200.jpg"/>

                            <div className="animated_image_header">
                                <h4> <a href=" "> Luis Ouriach </a> wrote </h4>
                                <h1> Ten Tips For The Aspiring Designer Beginners (Part 1) </h1>
                                <h3> jan 5, 2022 in <a href=" ">Design</a>, <a href=" ">Career</a>, <a href=" ">Workflow</a> </h3>
                            </div>
                            
                        </div>

                        <p>In this article (the first part in a series of two), Luis Ouriach shares advice that he wishes he has when starting out in his career. These tips come from his experience as a user interface and product designer for close to ten years, and if you're starting just now, then read on!</p>

                        <a className="article_one_continue_a_tag" href=" "> Continue reading ↬</a>

                    </div>

                    <div className="small_article">
                        <img className="small_article_image_animated" alt="small_article_image" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8d72c470-7345-4150-852f-539e01eee1ac/aleksandra-nagornaia-200x200.jpg"/>

                            <div className="small_article_info_container">
                                <h1> <a style={{color: "hsl(5, 65%, 50%)"}} href=" ">Aleksandra Nagornaia</a> / jan 3, 2022 in <a href=" ">Design</a>, <a href=" ">Tools</a>, <a href=" ">Figma</a> </h1>
                                <h2> Composition-Based Design System In Figma </h2>
                            </div>

                    </div>

                    <div className="small_article">
                        <img className="small_article_image_animated" alt="small_article_image" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/27cf2125-1ccc-4a49-9fbd-62b297a721c3/cosima-mielke-200px.png"/>

                            <div className="small_article_info_container">
                                <h1> <a style={{color: "hsl(5, 65%, 50%)"}} href=" ">Cosima Mielke</a> / dec 31, 2021 in <a href=" ">Wallpapers</a> </h1>
                                <h2> New Year, Fresh Desktop (January 2022 Wallpapers Edition) </h2>
                            </div>

                    </div>



                </div>

                <div className="post_and_email_container_email_signup">

                    <div className="get_email_container">
                        <img className="email_cat_image" alt="cat sitting in chair" src="https://www.smashingmagazine.com/images/smashing-cat/cat-in-the-chair.svg"/>
                        <button className="email_newsletter_button"> Email Newsletter </button>
                        <h1> Useful front-end & UX tips, delivered once a week. </h1>
                        <h2> With tools to help you get your work done better. Subscribe and get <a href=" ">Vitaly's Smart Interface Design Checklists PDF</a> — in your inbox. 🎁</h2>
                        
                        <div className="email_input_and_button">
                            <input type={"text"} placeholder="Your email"/>
                            <button> Meow! </button>
                        </div>

                        <h4> On <a href=" ">front-end & UX</a>. Trusted by 190.000 folks. </h4>
                    </div>

                </div>

            </div>



            <div className="helpful_training_articles_container">

                <div style={{backgroundColor: "##f1fdf8"}} className="helpful_article">
                    <a href=" "> Accessible Front-End Components </a>
                    <p> Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs. </p>
                    <button>Explore Accessible Components</button>
                </div>

                <div style={{backgroundColor: "#fef1f0"}} className="helpful_article">
                    <a style={{color: "#f55700"}} href=" "> CSS Generators & Tools </a>
                    <p> Useful CSS tools for animations, shadows, cubic-bezier curves, easing gradients, filters, overlays, type scales. </p>
                    <button style={{backgroundColor: "#f55700"}}>Explore CSS Generators</button>
                </div>


                <div style={{backgroundColor: "#fbecf9"}} className="helpful_article">
                    <a style={{color: "#aa1994"}} href=" "> Front-End Boilerplates & Starter Kits </a>
                    <p> HTML boilerplates, CSS resets, forms, dev themes, gitignore, CSS snippets, static sites, style guides. </p>
                    <button style={{backgroundColor: "#aa1994"}}>Explore Front-End Boilerplates </button>
                </div>
            </div>

            <a className="see_all_guides_link" href=" ">SEE ALL GUIDES →</a>


            <div style={{ backgroundColor: "rgba(223, 223, 223, 0.29)" ,width: "100%", height: "50%", top: "100%", position: "absolute", display: "flex", alignItems: "center", justifyContent : "center"}}>

                <div className="post_container">


                    <div className="user_post">
                        <img className="user_post_pic" alt="user_pic" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/796c8f02-34e8-46f1-bf0a-09e0e10a7100/paulboag-200x200.jpg"/>
                        
                        <div>
                            <h1> <a href=" "> Paul Boag </a> wrote </h1>
                            <h2> How To Price Projects And Manage Scope Creep </h2>
                            <h3> Scoping, estimating, and running digital projects can often feel like an exercise in futility. In this article, Paul Boag explains why you need to start breaking your projects down into manageable phases and why that's the best way to achieve significant benefits. </h3>
                            <h4> december 29, 2021 in <a href=" ">Business</a>, <a href=" ">Workflow</a>, <a href=" ">Communication</a> </h4>
                        </div>

                    </div>


                    <div className="user_post">
                        <img className="user_post_pic" alt="user_pic" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/373258fb-cd93-4a4c-b66e-5b67c8e01159/paulina-hetman-200x200.jpg"/>
                        
                        <div>
                            <h1> <a href=" "> Paulina Hetman </a> wrote </h1>
                            <h2> Building Gatsby Themes For WordPress-Powered Websites </h2>
                            <h3> Have you already built and published a Gatsby theme? In this article, Paulina Hetman explains how Gatsby themes work and what problems they can solve by comparing Gatsby themes with their WordPress counterparts. </h3>
                            <h4> december 27, 2021 in <a href=" ">Ui</a>, <a href=" ">Tools</a>, <a href=" ">Gatsby</a> </h4>
                        </div>

                    </div>


                    <div className="user_post">
                        <img className="user_post_pic" alt="user_pic" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/815de946-7f42-4c5e-a44e-bbb350c26375/alyssa-holland-200x200.jpeg"/>
                        
                        <div>
                            <h1> <a href=" "> Alyssa Holland </a> wrote </h1>
                            <h2> Creating A Custom Range Input That Looks Consistent Across All Browsers </h2>
                            <h3> Range inputs have notoriously been a pain to style. Each browser renders the input differently requiring you to use vendor prefixes in order to create a cohesive look and feel. In this article, we’ll take a look at the quirkiness of the HTML range input and demonstrate how to style the input to look consistent across all major browsers. </h3>
                            <h4> december 23, 2021 in <a href=" ">HTML</a>, <a href=" ">CSS</a>, <a href=" ">Browsers</a> </h4>
                        </div>

                    </div>




                    <div className="user_post">
                        <img className="user_post_pic" alt="user_pic" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/27cf2125-1ccc-4a49-9fbd-62b297a721c3/cosima-mielke-200px.png"/>
                        
                        <div>
                            <h1> <a href=" "> Cosima Mielke  </a> wrote </h1>
                            <h2> Useful UX Guidelines, Tools And Resources </h2>
                            <h3> A meaningful user experience is what can set your site apart from others. But what makes an experience truly meaningful? And how to achieve that? The tools, tips, and resources in this post not only help you to come up with a UX strategy that works for you and your team but also to circumvent potential UX pitfalls. </h3>
                            <h4> december 22, 2021 in <a href=" ">Tools</a>, <a href=" ">UX</a>, <a href=" ">Resources</a> </h4>
                        </div>

                    </div>





                </div>

                    

            </div>


        </div>
    )
}


export default Content

