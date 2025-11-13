// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Config options here
};

// --- THIS IS THE FIX ---
// Use module.exports (CommonJS syntax)
module.exports = nextConfig;