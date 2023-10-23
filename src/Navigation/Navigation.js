import './Navigation.css'

function Navigation() {
    return (
        <div className="Navigation">
            <div className="left-Section">
                <div className="title">
                    <p>FE-ASSIGNMENT</p>
                </div>
                
                <div className="Nav-item">
                    <a href="#">Work Space Visible</a>
                </div>
                <div className="Nav-item">
                    <a href="#">Board</a>
                </div>
            </div>
            <div className="right-Section">
                <div className="Nav-item">
                    <a href="#">Power-Up</a>
                </div>
                <div className="Nav-item">
                    <a href="#">Automation</a>
                </div>
                <div className="Nav-item">
                    <a href="#">Filter</a>
                </div>
                <div className="Nav-item">
                    <a href="#">Share</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;