import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg" alt="postImg"></img>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Roger</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim exercitationem veniam omnis vero? Ipsa quisquam aut nostrum inventore ratione doloremque eligendi, dolorem pariatur quibusdam, magnam veniam architecto voluptates? Rem esse enim cupiditate. Temporibus animi illo eaque repellat tenetur voluptatem, praesentium soluta magnam vitae excepturi voluptates, cum fuga cumque ad amet voluptatum quo officiis impedit assumenda cupiditate accusantium. Fuga, dignissimos natus similique, sunt aperiam molestias animi error dolores in voluptate ad rem hic officiis omnis nemo suscipit nihil quis exercitationem cumque iure numquam. Perspiciatis ad voluptatibus recusandae, eligendi, fuga modi ipsa culpa ratione ut iure ullam? Ipsum nulla alias deserunt.</p>
        </div>
    </div>
  )
}

export default SinglePost
