import React from "react";

const AddPostBlock = () => {
   return (
      <div className="add-post-block">
         <textarea className="post-area" placeholder="Your news..."></textarea>
         <button className="send-post">Send</button>
      </div>
   );
};

export default AddPostBlock;
