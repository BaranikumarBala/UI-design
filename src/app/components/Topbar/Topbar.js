"use client"
import styles from "./Topbar.module.css"
const TopBar = () =>
{
    return <div className={styles.topbar}>
                <div className={styles.topbar_container}>
                    <div className={styles.head_left}>
                        <div className={styles.head_left_logo}>
                        <div className={styles.logo}>EDYODA</div>  
                        <span><i>Stories</i></span>
                        </div>
                        <div class={styles.explorecat}>
                        <p className={styles.explore}>Explore Categories</p>
                        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="></img></span>
                        </div>
                    </div>                  
                    
                    <div className={styles.head_right}>
                        <div className={styles.paradiv}><p className={styles.headpara}>EdYoda is a learning and knowledge sharing platform for techies</p></div>
                        <div className={styles.button}>go to main website</div>
                    </div>
                </div>
            </div>
}

export default TopBar;