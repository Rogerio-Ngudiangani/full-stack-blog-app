import "./post.css"

const Post = () => {
  return (
    <div className="post">
        <img src="https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span>Music</span>
                <span>Life</span>
            </div>
                <span className="postTitle">Lorem ipsum dolor sit. 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eos maiores exercitationem, esse odio optio ut expedita saepe molestiae temporibus ipsum? Aliquam temporibus, fugiat libero esse reiciendis praesentium iste minus nostrum aliquid dolore exercitationem repellendus consectetur aut quos voluptatem ex nihil quibusdam ipsum quae id ipsa in laboriosam, unde vitae? Nostrum a molestias inventore et quam ad soluta? Officia, omnis?
                </p>
        </div>
    </div>
  )
}

export default Post