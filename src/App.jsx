import "./App.css";

function App() {
  return (
    <div className="container">
      <img src="https://picsum.photos/250/200" alt="" />
      <div className="title">
        <h3 className="headline">3 MYTHS EVERYONE GETS WRONG ABOUT YOGA</h3>
        <div className="sub">
          <span className="author">by Adrienne Brien</span>
          <span className="date">16 April 2017</span>
        </div>
      </div>
      <p className="body">
        As an avid yoga lover and teacher, i get really bummed out when people
        say they don't like yoga or that they don't want to try it. Of course
        everyone is entitled to their own opinion, but usually they feel this
        way becasue of what they've heard or because they had a bad experience.
      </p>
      <footer>
        <span className="pack">
          <span className="material-symbols-outlined">favorite</span>
          <span className="like">Likes</span>
        </span>
        <span className="pack">
          <span className="material-symbols-outlined">comment</span>
          <span className="comments">Comments</span>
        </span>
        <span className="pack">
          <span className="material-symbols-outlined">share</span>
          <span className="share">Share</span>
        </span>
      </footer>
    </div>
  );
}

export default App;
