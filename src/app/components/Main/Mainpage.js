"use client"
import styles from "./Mainpage.module.css"

const Main = () =>
{
    return <div id={styles.container}>
        <h1>Latest Posts</h1>
        <div class={styles.filter}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="filter-icon"></img>
            <span><p>Filtered by Category</p></span>
        </div>
        <div class={styles.cat_items}>
            <div class={styles.cat_list}>
                <div class={styles.cat_list_item}><a href="#">All</a></div>
                <div class={styles.cat_list_item}><a href="#">Artificial Inteligence</a></div>
                <div class={styles.cat_list_item}><a href="#">Cloud Computing</a></div>
                <div class={styles.cat_list_item}><a href="#">DevOps</a></div>
                <div class={styles.cat_list_item}><a href="#">Programming Languages</a></div>
                <div class={styles.cat_list_item}><a href="#">Mobile Development Applicatios</a></div>
                <div class={styles.cat_list_item}><a href="#">Technology and Tools</a></div>
                <div class={styles.cat_list_item}><a href="#">Get a Job in a Tech Comapany</a></div>
                <div class={styles.cat_list_item}><a href="#">Others</a></div>
            </div>
        </div>

        <div class={styles.card_container}>
            <div class={styles.cards}>
                <div class={styles.img_div}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg"/>
                </div>   
                <div class={styles.details}>
                    <h3 class={styles.title}>Getting started with...</h3>
                    <p class={styles.author}>Edyoda<span> | 08 JUL 2019</span></p>
                    <p class={styles.description}>Were rapidly moving towards a day and age where almost everything can be controlled<span>...</span></p>
                </div>        
            </div>

            <div class={styles.cards}>
                <div class={styles.img_div}>
                    <img src="	https://edyoda.s3.amazonaws.com/media/blog-images/WhatsApp_Image_2019-06-19_at_17.55.10.jpeg"/>
                </div>   
                <div class={styles.details}>
                    <h3 class={styles.title}>Learn this programmin...</h3>
                    <p class={styles.author}>Edyoda<span> | 08 Jul 2019</span></p>
                    <p class={styles.description}>Starting a career as a software developer obviously require one to undertake<span>...</span></p>
                </div>        
            </div>  

            <div class={styles.cards}>
                <div class={styles.img_div}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg"/>
                </div>   
                <div class={styles.details}>
                    <h3 class={styles.title}>Learn cloud computing-...</h3>
                    <p class={styles.author}>Edyoda<span> | 11 JUL 2019</span></p>
                    <p class={styles.description}>If you learn cloud computing then you can make things much easier for your projects<span>...</span></p>
                </div>        
            </div>

            <div class={styles.cards}>
                <div class={styles.img_div}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/data-mining-an-overview.jpg"/>
                </div>   
                <div class={styles.details}>
                    <h3 class={styles.title}>data mining: an overview</h3>
                    <p class={styles.author}>Edyoda<span> | 21 Jul 2019</span></p>
                    <p class={styles.description}>The process used by companies to convert raw data into useful information is<span>...</span></p>
                </div>        
            </div>

            <div class={styles.cards}>
                <div class={styles.img_div}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/an-introduction-to-green-cloud-computing.jpg"/>
                </div>   
                <div class={styles.details}>
                    <h3 class={styles.title}>An Introduction</h3>
                    <p class={styles.author}>Edyoda<span> | 21 Jul 2019</span></p>
                    <p class={styles.description}>Sustainability has been gaining importance since the last two decade because<span>...</span></p>
                </div>        
            </div>

            <div class={styles.cards}>
                <div class={styles.img_div}>
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops.jpg"/>
                </div>   
                <div class={styles.details}>
                    <h3 class={styles.title}>Understanding DevOps</h3>
                    <p class={styles.author}>Edyoda<span> | 23 Jul 2019</span></p>
                    <p class={styles.description}>DevOps is a term derived after combining development and operation for a<span>...</span></p>
                </div>        
            </div>

        </div>

    </div>
}
export default Main;