# Meeting AI Backend (Gemini Flash + Express.js)

This is a Node.js backend service that:

* Accepts raw meeting notes (text or `.txt` file)
* Sends the content to Google's **Gemini 1.5 Flash** AI model
* Extracts:

  * A short summary
  * Key decisions
  * Action items (with optional owner/deadline)
* Returns structured JSON output

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/meeting-ai-backend.git
cd meeting-ai-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
GEMINI_API_KEY=your_google_generative_ai_key
PORT=3000
```

### 4. Run the server

```bash
npm run dev
```

---

## 🧪 Test the API



### Option B: Upload `.txt` file (Linux/macOS/WSL/PowerShell w/ curl.exe)

```bash
curl.exe -X POST http://localhost:3000/process-meeting -F "file=@sample-notes/meeting1.txt"
```







## ✅ Output Format

```json
{
  "summary": "This meeting covered Q4 marketing. Key decisions were made on social strategy.",
  "decisions": ["Focus more on social media ads"],
  "actionItems": [
    { "task": "Create campaign plan", "owner": "John", "deadline": "next Monday" },
    { "task": "Submit budget proposal", "owner": "Sarah", "deadline": "end of week" }
  ]
}
```

---


