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


        </div>
    )
}


export default Content

