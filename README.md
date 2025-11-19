Student Directory Portal
A responsive and organized Student Directory Portal built with React + Vite. This project showcases reusable components, conditional rendering, nested lists, and clean UI styling. The portal displays two groups of students—Active Students and Alumni—along with detailed directory statistics.


🚀 Live Demo

Live Website: (https://student-dir.vercel.app/)


GitHub Repository: (https://github.com/nakshathradileep/student_dir.git)



📌 Features
✅ Reusable StudentCard Component
Each student is displayed using a dedicated reusable component that includes:


Name


Roll Number


Course


Email


Skills (rendered using map())


Active/Inactive status badge (via conditional rendering)


✅ Two Student Groups

Active Students (minimum 4 profiles)


Alumni (minimum 3 profiles)


Both lists use the JavaScript map() method and proper unique key props.

✅ Directory Statistics
The portal displays:


Total students count


Number of active students


Number of alumni


Most common skill across all students


✅ Clean UI & Styling

Styled student cards


Skill badges


Color-coded status tags


Responsive grid layout



🧩 Component Structure
StudentCard Component
Path: src/components/StudentCard.jsx
Responsibilities:


Display individual student information


Render the skills array using map()


Show a conditional badge for Active/Inactive status


App Component
Path: src/App.jsx
Responsibilities:


Store Active Students and Alumni as separate arrays


Render each group using the map() method


Calculate and display directory statistics


Organize layout and sections



📂 Project Structure
student-directory/
│── public/
│── src/
│   ├── components/
│   │   └── StudentCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── package.json
│── vite.config.js
└── README.md


🛠️ Installation & Running the Project (Locally)
1️⃣ Clone the repository
git clone <your-github-repo-link>
cd student-directory

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Build for production
npm run build


☁️ Deployment
Recommended Platforms:

Vercel (auto-detects Vite projects)


Netlify


Deployment Settings:

Build Command: npm run build


Output Directory: dist



📦 Submission Instructions
Before submitting:


Delete the node_modules folder


Compress the project directory as:


studentdirectory_<yourname>.zip


Ensure README contains both GitHub and live deployment links



🏁 Final Notes
This project demonstrates your skills in:


React components


Props & conditional rendering


List rendering with map()


Data organization


UI design & deployment


Make sure everything renders correctly on your deployed website before final submission.


Good luck with your project!
