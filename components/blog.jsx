import React from 'react'
import blog from '../app/blog.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <section className={blog.blogSection} id='blog'>

      <div className={blog.twoblogText}>
       <div className={blog.blogHeader}>
       <h1 className={blog.blogH1}>Recent Blog</h1>
       </div>
          
          <div className={blog.pasagBtn}>
          <p className={blog.blogpasagText}>
          Read our blog and try to see everything from every perspective. Our passion lies in making everything accessible and aesthetic for everyone.</p>
          <Link href={"/blog"}> <button className={blog.ExploreBlogbtn}>Explore All Blog</button></Link> 
          </div> 


        
      </div>

      <div className={blog.allBlog}>  
        <div className={blog.firstBlog}>
        <Image width={1000} height={1000} src={"/images/image-post1.webp"} className={blog.blogImagesone}/>
        <div className={blog.allBlogdetails}>
          <p className={blog.blogDate}>Latest News, March 4, 2024</p>
          <figure className={blog.blogTitle}>How to manage a talented and successful design team</figure>
          <Link href={"#"}> <button className={blog.blogBtn}>Read More</button></Link>  
        </div>
        </div>

        <div className={blog.firstBlog}>
        <Image width={1000} height={1000} src={"/images/image-post2.webp"} className={blog.blogImagesone}/>
        <div className={blog.allBlogdetails}>
          <p className={blog.blogDate}>Latest News, March 4, 2024</p>
          <figure className={blog.blogTitle}>How to manage a exclusive features to impress your visitors</figure>
          <Link href={"#"}> <button className={blog.blogBtn}>Read More</button></Link>  
        </div>
        </div>

      </div>
    </section>
  )
}

export default Blog