module.exports = {
  reactStrictMode: true,
  images: { domains: ['res.cloudinary.com'] },
  BASE_URL: process.env.NODE_ENV === 'production' ? 'https://onlinehatt-major.vercel.app' : 'http://localhost:3000',
	MONGODB_URI:
		'mongodb+srv://mern_admin:passadmin@cluster0.qcz4l.mongodb.net/database?retryWrites=true&w=majority',
	JWT_SECRET: 'YOUR_ACCESS_TOKEN_SECRET',
	EFRESH_TOKEN_SECRET: 'YOUR_REFRESH_TOKEN_SECRET',
	PAYPAL_CLIENT_ID:
		'AXnPNg6vFQeUKSoBS7OmSn_bIPPc3MIHJerMdVggsit_fugt3L4zwCdmszZhSIsYo730IGWUgLpxrFGb',
	CLOUD_UPDATE_PRESET: 'onlinehatt-major',
	CLOUD_NAME: 'aditya-media',
	CLOUD_API:
		'https://api.cloudinary.com/v1_1/aditya-media/image/upload',
	API_KEY: "629878439937616",
	API_SECRET: "gfyCU4XnQaxP1I_2stGU6_dZYTE"
};
