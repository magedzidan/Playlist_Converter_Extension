# Playlist Transfer Chrome Extension

This Chrome Extension allows users to seamlessly transfer playlists between different music platforms such as YouTube Music and Spotify. With an easy-to-use interface, this tool helps users move their curated playlists without the hassle of manually recreating them on other platforms.

---

## 🚀 Key Features

- **Cross-Platform Playlist Transfer**  
  Effortlessly transfer playlists from platforms like **YouTube Music** to **Spotify** (more platforms coming soon).

- **Platform Integration**  
  Support for connecting your **YouTube Music** and **Spotify** accounts using **OAuth** authentication for secure access.

- **Real-Time Progress Tracking**  
  Visual progress bar to indicate the status of the transfer process. You’ll know exactly how much progress has been made and when it’s complete.

- **Smooth User Interface**  
  Clean, intuitive UI designed for easy use. Simply select your playlist and choose the destination platform, and let the extension handle the rest!

- **Playlist Transfer Settings**  
  Choose your source platform, target platform, and transfer the playlist with just one click!

---

## 🖥️ User Interface

The extension features a simple and modern design, inspired by popular music streaming apps like **Spotify** and **YouTube Music**. Here's how the UI is structured:

### **UI Layout:**
1. **Source and Target Platform Selection:**
   - Dropdown menus allow users to select the source (e.g., YouTube Music) and target (e.g., Spotify) platforms.
   
2. **Playlist Display:**
   - Once a platform is selected, the app displays a list of available playlists for the user to choose from. Each playlist is shown with its name and description.

3. **Transfer Button:**
   - A prominent **"Start Transfer"** button initiates the playlist migration process. A **loading spinner** or **progress bar** will appear while the transfer is ongoing.

4. **Completion Message:**
   - Upon successful transfer, a message displays confirming that the playlist was successfully transferred to the target platform.

### **Visual Design:**
- **Minimalistic and Professional**: The design features a dark background with clean, contrasting text for easy readability.
- **Modern Layout**: Uses a responsive grid layout with intuitive button placements and readable fonts for an effortless experience.
  
---

## 🔧 How It Works

1. **Install the Extension**:  
   Simply install the extension from the Chrome Web Store.
   
2. **Sign in to Your Accounts**:  
   After installation, sign in with your **YouTube Music** and **Spotify** accounts via OAuth authentication.

3. **Select Playlist & Platforms**:  
   Choose your source playlist and target platform (e.g., YouTube Music → Spotify).

4. **Start Transfer**:  
   Click **Start Transfer** to begin the process. The progress bar will show the transfer status in real-time.

---

## 📊 Data Flow and State Management

The application handles all state management via **React** and uses **hooks** like `useState` and `useEffect`. User data (e.g., playlists) is fetched from the respective music platforms’ APIs and transferred securely.

---

## 💡 Future Enhancements

- **Support for Additional Platforms**: Expanding to more music streaming services like **Apple Music**, **Tidal**, and more.
- **Custom Playlist Settings**: Allow users to adjust settings for which songs to transfer, and handle missing songs.
- **More User-Friendly Features**: Add a user preferences section and save favorite playlist setups for quicker access.

---

## 🔨 Technologies Used

- **React**: For building the user interface and handling state management.
- **OAuth Authentication**: For secure user authentication with Spotify and YouTube Music.
- **Spotify Web API**: To fetch playlists and perform transfer actions.
- **YouTube Data API**: To access user playlists from YouTube Music.

---
