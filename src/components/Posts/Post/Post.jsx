import React from "react";

import classes from "./Post.module.css";

const Post = (props) => {
   return (
      <div className={classes.post}>
         <div className={classes.avatarWrap}>
            <div className={classes.postAvatarBlock}>
               <img src={props.avatar} alt="" />
            </div>
            <div className={classes.borderAvatar}></div>
         </div>
         <div className={classes.postTextBlock}>
            <div className={classes.nickWrap}>
               <p className={classes.nickname}>xr1s0nx</p>
            </div>
            <p className={classes.text}>
               {props.postText}               
            </p>
            <div className={classes.bottom}>
               <div className={classes.likesWrap}>
                  <a href="/#" className={`${classes.likeBtn}`}>
                     <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 511.999 511.999"
                     >
                        <path
                           className={classes.fillHeart}
                           d="M404.121,52.066c-15.078-4.814-29.245-7.037-42.436-7.037c-41.763,0-73.826,22.246-94.686,54.895
      c-2.851,4.466-7.544,6.708-12.265,6.708c-4.462,0-8.953-1.999-11.948-6.013c-23.062-30.875-54.038-55.037-95.835-55.037
      c-12.086,0-25.079,2.02-39.045,6.482C22.932,79.249-65.995,260.291,247.94,464.579c2.449,1.595,5.256,2.391,8.062,2.391
      s5.613-0.795,8.062-2.391C577.988,260.293,489.06,79.251,404.121,52.066z"
                        />
                        <path
                           d="M510.383,152.815c-4.137-30.776-16.176-59.261-34.818-82.378c-17.247-21.389-39.62-37.288-62.995-44.77
      c-17.368-5.547-34.483-8.357-50.885-8.357c-42.575,0-80.229,18.728-107.658,53.144c-30.555-34.913-66.507-52.588-107.078-52.588
      c-15.312,0-31.286,2.624-47.479,7.797c-23.395,7.484-45.773,23.384-63.025,44.772C17.797,93.553,5.754,122.039,1.617,152.817
      c-6.683,49.719,7.43,103.951,40.817,156.831c38.592,61.125,102.648,121.069,190.388,178.165c6.914,4.499,14.929,6.876,23.18,6.876
      c8.251,0,16.266-2.377,23.18-6.876c87.738-57.097,151.792-117.04,190.383-178.168C502.948,256.766,517.063,202.534,510.383,152.815z
      M256,466.971c-2.806,0-5.613-0.795-8.062-2.391C-65.997,260.293,22.93,79.251,107.905,52.066
      c13.966-4.462,26.958-6.482,39.045-6.482c41.797,0,72.773,24.161,95.835,55.037c2.997,4.012,7.485,6.013,11.948,6.013
      c4.722,0,9.413-2.242,12.265-6.708c20.861-32.651,52.924-54.895,94.686-54.895c13.192,0,27.358,2.223,42.436,7.037
      c84.939,27.185,173.867,208.227-140.059,412.515C261.615,466.176,258.806,466.971,256,466.971z"
                        />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                     </svg>
                  </a>
                  <p className={classes.likeCount}>{props.likeCount}</p>
               </div>
               <p className={classes.dateText}>{props.date}</p>
            </div>
         </div>
      </div>
   );
};

export default Post;