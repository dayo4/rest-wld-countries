# 🌍 Country Explorer

A Next.js application that allows users to search and filter countries by region. Clicking on a country provides detailed information about it. The app follows the REST Countries API and is fully responsive.

## 🚀 Features

- 🌎 **Search**: Find countries by name
- 🔍 **Filter**: Sort countries by region
- 📌 **Details Page**: View population, capital, and other details
- 📱 **Responsive Design**: Optimized for all devices

## 📸 Screenshots

### Home Page



### Country Details Page



## ⚡ Tech Stack

- **Next.js 15** – SSR, SSG & API routing
- **TypeScript** – Static typing
- **Tailwind CSS** – Responsive styling
- **REST Countries API** – Country data
- **Vercel** – Deployment

## 🛠 Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dayo4/rest-wld-countries
   cd rest-wld-countries
   ```

2. Install dependencies:

   ```sh
   npm install  # or yarn install
   ```

3. Run the development server:

   ```sh
   npm run dev  # or yarn dev
   ```

4. Open `http://localhost:3000` in your browser.

## 🔧 Deployment

To deploy the app on **Vercel**, run:

```sh
vercel
```

Follow the setup instructions, and your project will be live!

## 📜 API Reference

This project uses the [REST Countries API](https://restcountries.com/) to fetch country data.

## 📂 Folder Structure

```
📦 country-explorer
├── 📁 public        # Static assets
├── 📁 src
│   ├── 📁 components  # Reusable components
│   ├── 📁 app         # Next.js pages
│   ├── 📁 styles      # Tailwind styles
│   ├── 📁 lib         # API fetching functions
├── 📄 README.md
├── 📄 package.json
```

## 🏗 Future Improvements

- 🌐 **Multi-language support**

## 🙌 Contributing

Contributions are welcome! Feel free to fork and submit a PR.

## 📝 License

This project is **MIT Licensed**.
