# 📝 Notes App

A simple, responsive web-based notes application built with vanilla HTML, CSS, and JavaScript. Create, edit, and manage your notes with a clean and intuitive interface.

## ✨ Features

- **Create Notes**: Add new notes with custom titles and content
- **Persistent Storage**: Notes are saved locally using localStorage
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Color-coded Notes**: Each note gets a random background color for easy identification
- **Delete Notes**: Remove notes with a confirmation dialog
- **Real-time Timestamps**: Each note displays creation date and time
- **Clean UI**: Modern, minimalist design with smooth interactions

## 🚀 Demo

![Notes App Preview](https://nishank.dev)

_Replace this placeholder with actual screenshots of your app_

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Functionality and interactivity
- **LocalStorage API** - Data persistence
- **Google Fonts** - Poppins font family

## 📱 Responsive Design

The app is fully responsive and provides optimal viewing experience across:

- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

### Desktop Features:

- Maximum width constraint for better readability
- Centered content layout
- Optimized textarea with proper text wrapping

### Mobile Features:

- Full-width layout for maximum screen utilization
- Touch-friendly interface
- Optimized font sizes and spacing

## 🎨 UI Features

- **Welcome Section**: Personalized greeting with profile picture
- **Search Functionality**: Search icon for future implementation
- **Add Button**: Easy-to-access "+" button for creating new notes
- **Color Themes**: Random color assignment for visual organization
- **Smooth Animations**: CSS transitions for better user experience

## 📂 Project Structure

```
Notes/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript functionality
├── assets/
│   ├── cat.jpg         # Profile picture
│   └── search.svg      # Search icon
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Devnish0/minimalNotes.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Notes
   ```

3. **Open the application:**

   - Simply open `index.html` in your web browser
   - Or use a local server:

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (if you have live-server installed)
     npx live-server
     ```

4. **Start taking notes!** 📝

## 🎯 How to Use

1. **Create a New Note:**

   - Click the "+" button
   - Enter a title (max 20 characters)
   - Write your note content in the textarea
   - Click "Confirm" to save

2. **View Notes:**

   - All saved notes appear on the main screen
   - Each note shows title, date/time, and content preview
   - Notes are color-coded for easy identification

3. **Delete a Note:**
   - Click the "remove" button on any note
   - Confirm deletion in the popup dialog

## 🔧 Features in Detail

### Data Persistence

- Uses browser's localStorage to save notes
- Data persists between browser sessions
- No server or database required

### Note Structure

Each note contains:

- Unique ID (timestamp)
- Title (user-defined, max 20 chars)
- Content (unlimited text)
- Creation timestamp
- Random background color

### Responsive Breakpoints

- Mobile: Full width usage
- Desktop: Max-width of 1200px with centered layout

## 🎨 Customization

### Changing Colors

Edit the color array in `script.js`:

```javascript
let color = [`#CBA9FF`, `#D4FF6A`, `#AEE1F9`, `#FFD3A5`, `yellow`];
```

### Modifying Styles

- Main styles are in `style.css`
- Responsive design uses CSS flexbox
- Font family can be changed in the Google Fonts link

### Adding Features

The codebase is modular and easy to extend:

- Add search functionality
- Implement note categories/tags
- Add export/import features
- Include rich text editing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nishank Gangwar** - [@Devnish0](https://github.com/Devnish0)

## 🙏 Acknowledgments

- Google Fonts for the Poppins font family
- Icons and images used in the interface
- Inspiration from modern note-taking applications

## 📸 Screenshots

_Add actual screenshots here showing:_

- Main notes view
- Add note interface
- Mobile responsive design
- Desktop layout

---

⭐ **If you found this project helpful, please give it a star!** ⭐

## 🐛 Known Issues

- Search functionality is not yet implemented
- No categories/tags system
- Notes cannot be edited after creation (only delete and recreate)

## 🔮 Future Enhancements

- [ ] Search and filter functionality
- [ ] Note editing capabilities
- [ ] Categories and tags
- [ ] Export notes to different formats
- [ ] Dark/light theme toggle
- [ ] Note sharing functionality
- [ ] Rich text editing
- [ ] Cloud sync capabilities

---

_Made with ❤️ by [Nishank Gangwar](https://github.com/Devnish0)_
