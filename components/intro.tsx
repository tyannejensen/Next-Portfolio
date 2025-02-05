// TODO: omit any code that is not needed

import Image from 'next/image'
import authorImage from '@/public/images/author.jpeg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Tyanne Jensen.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer and I love to build things. I&#39;m
          passionate about creating software that is both functional and
          beautiful. I&#39;m currently working on a few projects that I&#39;m
          excited to share with you!
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Tyanne Jensen'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
