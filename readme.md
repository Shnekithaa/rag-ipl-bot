# 🏏 IPL RAG Bot – AI-Powered IPL Query Assistant

Welcome to IPL RAG Bot, an AI-powered chatbot that provides real-time IPL 2025 updates, player stats, and more! Built using RAG (Retrieval-Augmented Generation), it combines live web data with LLM capabilities for accurate responses. 🎯

## 🚀 Features

✅ **Latest IPL News** – Get updates on teams, matches, and players.

✅ **Player & Team Stats** – Retrieve real-time IPL 2025 statistics.

✅ **AI-Powered Responses** – Uses OpenAI GPT models.

✅ **Vector Database Integration** – Uses Astra DB for storing IPL data.

✅ **Fast & Scalable** – Built with Next.js + LangChain for efficient queries.

## 🛠️ Tech Stack

🔹 **Frontend:** Next.js, React  
🔹 **Backend:** Node.js, Express  
🔹 **LLM:** OpenAI GPT Models  
🔹 **Vector Database:** Astra DB  
🔹 **Scraping:** Puppeteer (for live IPL data)  

## 🌇 Setup & Installation

### 1. Clone the Repository

```sh
git clone https://github.com/Shnekithaa/rag-ipl-bot.git
cd ragbot
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```sh
# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key

# Astra DB Credentials
ASTRA_DB_NAMESPACE=your_namespace
ASTRA_DB_COLLECTION=your_collection
ASTRA_DB_API_ENDPOINT=your_db_endpoint
ASTRA_DB_APPLICATION_TOKEN=your_application_token
```

### 4. Run the IPL Data Scraper

This script fetches the latest IPL data and stores embeddings in Astra DB.

```sh
npm run load-db
```

### 5. Start the Server

```sh
npm run dev
```

🔹 Open [http://localhost:3000](http://localhost:3000) in your browser to chat with the bot!

## 🔖 Usage

Ask questions like:

👉 **"Who won IPL 2024?"**  
👉 **"Show me the latest IPL 2025 auction updates."**  

The bot fetches relevant context from Astra DB and generates responses using OpenAI's GPT models.

## 📌 Roadmap

✅ Integrate OpenAI GPT Models  
✅ Improve retrieval with better embeddings  
🔢 Deploy on Vercel or AWS  
🔢 Add Live IPL Match Score API  

## 🤝 Contributing

Want to improve the bot? PRs are welcome! Fork this repo and submit a pull request.

## 🌟 Show Your Support!

If you like this project, give it a star ⭐ and share it! 🚀

Happy coding! 🎉🏏

