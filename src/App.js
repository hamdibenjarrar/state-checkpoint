import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          fullName: "Fattouma Sana",
          bio: "Senior Software Engineer specializing in React and Node.js.",
          imgSrc: "https://media.licdn.com/dms/image/v2/D4D03AQFlyEiC_WZboA/profile-displayphoto-shrink_800_800/B4DZP9GO29GgAk-/0/1735118090330?e=1744848000&v=beta&t=MyLudtua2lEhBm89vYQtIEAxUaSsFSzAdbLosBoWNYw",
          profession: "Full Stack Developer"
        },
        {
          id: 2,
          fullName: "Hamdi Ben Jarrar",
          bio: "Data Scientist with expertise in machine learning and AI.",
          imgSrc: "https://media.licdn.com/dms/image/v2/D4D03AQG468oIXhxgFg/profile-displayphoto-shrink_800_800/B4DZQJt5fmGUAc-/0/1735329817703?e=1744848000&v=beta&t=VU5Q-3rfPQ877Nhjr48lOjhOs_UpeCCfZ002m08PYOs",
          profession: "Data Scientist"
        },
        {
          id: 3,
          fullName: "Zaineb Hechich",
          bio: "UX/UI Designer passionate about creating beautiful and functional interfaces.",
          imgSrc: "https://s.yimg.com/ny/api/res/1.2/hBFsI1ZoNmm9zj0PT9o8mA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTgxOA--/https://media.zenfs.com/en/men_s_journal_718/92b1d22ad1e081c5eba8653d1c3bcc98",
          profession: "UX/UI Designer"
        }
      ],
      currentIndex: 0,
      shows: true,
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  nextProfile = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.people.length
    }));
  };

  prevProfile = () => {
    this.setState(prevState => ({
      currentIndex: 
        (prevState.currentIndex - 1 + prevState.people.length) % 
        prevState.people.length
    }));
  };

  render() {
    const { people, currentIndex, shows, timeSinceMount } = this.state;
    const currentPerson = people[currentIndex];

    return (
      <div className="app">
        <header>
          <h1>Team Profiles</h1>
          <button onClick={this.toggleShow} className="toggle-btn">
            {shows ? 'Hide Profiles' : 'Show Profiles'}
          </button>
        </header>

        {shows && (
          <div className="profile-container">
            <button className="nav-btn prev-btn" onClick={this.prevProfile}>
              &lt;
            </button>
            
            <div className="profile-card">
              <div className="image-container">
                <img src={currentPerson.imgSrc} alt={currentPerson.fullName} />
                <div className="profile-counter">
                  {currentIndex + 1} / {people.length}
                </div>
              </div>
              <div className="profile-info">
                <h2>{currentPerson.fullName}</h2>
                <h3>{currentPerson.profession}</h3>
                <p>{currentPerson.bio}</p>
              </div>
            </div>

            <button className="nav-btn next-btn" onClick={this.nextProfile}>
              &gt;
            </button>
          </div>
        )}

        <div className="timer">
          ⏰ Component mounted {timeSinceMount} seconds ago
        </div>
      </div>
    );
  }
}

export default App;