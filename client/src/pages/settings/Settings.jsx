import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Accounat</span>
                <span className="settingsDeleteTitle">Delete Your Accounat</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg" alt="profile_img" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                </label>
                <input className="settingsInput" type="file" style={{display: "none"}} id="fileInput"/>
                </div>
                <label>Username</label>
                <input className="settingsInput" type="text" placeholder=""/>
                <label>Email</label>
                <input className="settingsInput" type="email" placeholder=""/>
                <label>Password</label>
                <input className="settingsInput" type="password" placeholder=""/>
                <button className="settingsSubmit">Update</button>
                
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings