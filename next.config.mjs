import mdx from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = mdx({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})

export default nextConfig
