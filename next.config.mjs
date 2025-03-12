/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "coupon-app-image.s3.us-east-1.amazonaws.com",
        },
      ],
    },
  };
  
  export default nextConfig; // ✅ Use `export default` instead of `module.exports`
  