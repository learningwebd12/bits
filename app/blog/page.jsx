
import React from 'react'
import blog from '/app/innerblog.module.css'
import Image from 'next/image'
import Link from 'next/link'



const Blogsection = () => {
  return (
    <section className={blog.innerblogSection}>
      <div className={blog.blogHeaderText}>
        <div className={blog.innerblogH1} >
          <h1 className={blog.innerh1}>
            Read Our Blog</h1>
        </div>

        <div className={blog.innerblogPasag} >
          <p className={blog.innerText}>Read our blog and try to see everything from every perspective. Our passion lies in making everything accessible and aesthetic for everyone.</p>
        </div>

      </div>

      <div className={blog.allBlogPost}>
        <div className={blog.imageandText}>
          <div className={blog.innerImages}>
            <Image className={blog.mainBlogPostImages} height={1000} width={1000} src="/images/image-post1.webp" />
            <p className={blog.blogDate} >Latest News, March 4, 2024</p>
          </div>
          <div className={blog.textblog}>
            <figcaption className={blog.figcaption}>How to manage a talented and successful design team</figcaption>
            <p className={blog.blogDescribe}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
         <Link href={"/allBlogpost/firstblog"}>Click here</Link>
          </div>
        </div>

        <div className={blog.imageandText}>
          <div className={blog.innerImages}>
            <Image className={blog.mainBlogPostImages} height={1000} width={1000} src="/images/image-post1.webp" />
            <p className={blog.blogDate} >Latest News, March 4, 2024</p>
          </div>
          <div className={blog.textblog}>
            <figcaption className={blog.figcaption}>How to manage a talented and successful design team</figcaption>
            <p className={blog.blogDescribe}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
        </div>

        <div className={blog.imageandText}>
          <div className={blog.innerImages}>
            <Image className={blog.mainBlogPostImages} height={1000} width={1000} src="/images/image-post1.webp" />
            <p className={blog.blogDate} >Latest News, March 4, 2024</p>
          </div>
          <div className={blog.textblog}>
            <figcaption className={blog.figcaption}>How to manage a talented and successful design team</figcaption>
            <p className={blog.blogDescribe}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
        </div>

        <div className={blog.imageandText}>
          <div className={blog.innerImages}>
            <Image className={blog.mainBlogPostImages} height={1000} width={1000} src="/images/image-post1.webp" />
            <p className={blog.blogDate} >Latest News, March 4, 2024</p>
          </div>
          <div className={blog.textblog}>
            <figcaption className={blog.figcaption}>How to manage a talented and successful design team</figcaption>
            <p className={blog.blogDescribe}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
        </div>

        <div className={blog.imageandText}>
          <div className={blog.innerImages}>
            <Image className={blog.mainBlogPostImages} height={1000} width={1000} src="/images/image-post1.webp" />
            <p className={blog.blogDate} >Latest News, March 4, 2024</p>
          </div>
          <div className={blog.textblog}>
            <figcaption className={blog.figcaption}>How to manage a talented and successful design team</figcaption>
            <p className={blog.blogDescribe}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
        </div>

        <div className={blog.imageandText}>
          <div className={blog.innerImages}>
            <Image className={blog.mainBlogPostImages} height={1000} width={1000} src="/images/image-post1.webp" />
            <p className={blog.blogDate} >Latest News, March 4, 2024</p>
          </div>
          <div className={blog.textblog}>
            <figcaption className={blog.figcaption}>How to manage a talented and successful design team</figcaption>
            <p className={blog.blogDescribe}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Blogsection