import easyimg1 from "../../assets/easyimg1.jpg"
import easyimg2 from "../../assets/easyimg2.jpg"
import easyimg3 from "../../assets/easyimg3.jpg"
import easyimg4 from "../../assets/easyimg4.jpg"
import { Link } from 'react-router-dom'
import Blogcard from "../../componnts/blogCardComponent/Blogcard"

const Blogs = () => {

const blogsArray = [
    {
        img:easyimg1,
        title:"By Claire Robinson",
        link:"Recieve money in any currency with no fees",
        desc:"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single"
    },
    {
        img:easyimg2,
        title:"By Wilson Hutton",
        link:"Treat yourself without worrying about money",
        desc:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you"
    },
    {
        img:easyimg3,
        title:"By Claire Robinson",
        link:"Take your Easybank card wherever you go",
        desc:"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you"
    },
    {
        img:easyimg4,
        title:"By Wilson Hutton",
        link:"Our invite-only Beta accounts are now live!",
        desc:"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site"
    }
]

  return (
    <section id="blogs">
        <div className="blog-header">
            <h3>Latest Articles</h3>
        </div>
            
        <div className="blog-body">
            {
                blogsArray.map((blog) => (
                    <Blogcard blog = {blog}/>
                ))
            }
            
        </div>
    </section>
  )
}

export default Blogs