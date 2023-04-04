# next-chakra-starter

Next-Chakra-Starter is a starter template (boilerplate) for building modern web applications with Next.js (TypeScript), Chakra UI, axios, react-icons, react-hook-form, and zustand. It provides a solid foundation for quickly prototyping and developing production-ready applications with a consistent UI design, robust state management, and efficient data fetching.

# Features

✔ Pre-configured setup with Next.js, Chakra UI, axios, react-icons, react-hook-form, and zustand.

✔ Customizable theme and styling system using Chakra UI's design tokens and component props - src/theme/index.

✔ Global state management solution with zustand.

✔ Form handling with react-hook-form.

✔ Data fetching with axios that supports RESTful API requests, error handling, and cancellation. It includes two named functions, axios (instance) for fetching RESTful APIs and axiosGraphql for fetching GraphQL APIs, located in the src/utils/axios.fetcher.ts file.

✔ A set of utility and helper functions for common tasks and workflows, located in the src/utils/ directory:
cloudinary.helpers.ts - includes utilities for uploading images to Cloudinary and deleting by token ID.

✔ next.utils.ts - includes helpful utils:

- checkIsServer - for checking whether you are on a server or client.
- convertToBase64 - for converting a file to base64.
- reloadSession - for firing the visibilitychange event without changing the tab.

next-chakra-starter is intended for developers who want to start building web applications with Next.js, Chakra UI, axios, react-icons, react-hook-form, and zustand. To use the starter template, follow these steps:

Clone the repository: git clone https://github.com/muneebhashone/next-chakra-starter.git
Navigate to the project directory: cd next-chakra-starter
Install dependencies: npm install
Run the development server: npm run dev

Once the development server is running, you can start modifying the index (src/pages/index.tsx), and styles to fit your project's requirements. You can also customize the theme and styling system by editing the src/theme/index.ts file.

# Contributions

next-chakra-starter is an open-source project that welcomes contributions from developers of all levels and backgrounds. If you find a bug, want to suggest a feature, or want to improve the documentation, please create an issue or pull request in the project's repository.
