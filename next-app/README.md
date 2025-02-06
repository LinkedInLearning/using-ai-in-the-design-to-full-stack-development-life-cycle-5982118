# 🐶 LinkedIn Learning Pet Adoption Site (For Devs) 🐾🐱

## Overview 🏡🐕🐾

The **LinkedIn Learning Pet Adoption Site** is designed to facilitate pet adoptions by providing easy access to detailed pet information. This project consists of a **Next.js** frontend powered by a **Contentful** backend, utilizing **GraphQL** for efficient data retrieval. 🐾📊🌍

## Tech Stack 🛠️💻🚀

- **Frontend:** Next.js (with SSR and ISR)
- **Styling:** SASS
- **Backend:** Contentful (Headless CMS)
- **Data Fetching:** GraphQL
- **Testing:** Jest (React Testing Library and Cypress to be added in the future)
- **Deployment:** Vercel

## Getting Started 🚀🔧📦

### Prerequisites 📌✅⚡

Ensure you have the following installed:

- **Node.js** (Latest LTS version recommended)
- **npm** (Bundled with Node.js)

### Installation 📥🖥️💾

1. Clone the repository from GitHub:
   ```sh
   git clone git@github.com:LinkedInLearning/using-ai-in-the-design-to-full-stack-development-life-cycle-5982118.git
   ```
2. Navigate into the project directory:
   ```sh
   cd next-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Copy and update the following variables in `.env.local`:
     ```ini
     CONTENTFUL_SPACE_ID=your_space_id
     CONTENTFUL_ACCESS_TOKEN=your_access_token
     ```
   - Replace `your_space_id` and `your_access_token` with your actual Contentful credentials. 📝🔑🔒

### Running the Project 🏃‍♂️💨💻

To start the development server:

```sh
npm run dev
```

This will launch the Next.js development server, typically accessible at `http://localhost:3000/`. 🌍📡✅

## Testing 🧪🛠️📊

Run the test suite with:

```sh
npm run test
```

- **Unit Tests:** Jest (React Testing Library support to be added)
- **End-to-End Tests:** Cypress (to be integrated later)

## Deployment 🚀🌍📡

The project is deployed using **Vercel**. ✅⚙️🌐

### Production Build 🏗️📦🚀

To generate a production-ready build:

```sh
npm run build
```

### Environment Variables 🔑🔒📝

Ensure the following variables are configured in Vercel:

```ini
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## Contribution Guidelines 🤝📖✅

1. **Branch Naming Convention:** `[Chapter #]-[feature]-[your name]` 🏷️📂
   - Example: `05-documentation-dakota`
2. **GitHub Issues:** Track progress using the **GitHub Project Board**. 📌🛠️
3. **Pull Requests:**
   - Provide **clear and descriptive** commit messages. 📜✍️
   - Ensure tests pass before merging. ✅🔍

## Additional Resources 📚🔗🎯

- [Contentful Help Guides](https://www.contentful.com/help/)
- [Next.js Documentation](https://nextjs.org/docs/)
- [GraphQL Documentation](https://graphql.org/learn/)

