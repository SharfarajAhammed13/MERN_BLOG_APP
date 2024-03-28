import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Sharfaraj's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Sharfaraj's Blog! This blog was created by Sharfaraj and mentored by Sahand Ghavidel a well know Youtube MERN Stack Mentor.
              As a personal project to share his thoughts and ideas with the
              world.
            </p>

            <p>
              On this blog, you'll find weekly articles on topics
              such as web development, and my life learning and expieriences. Sharfaraj is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
