const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <>
      <center className="welcomeMessage">
        <h1 >There are no posts</h1>
        <button onClick={onGetPostsClick}
        type="button" 
        className="btn btn-primary">Get posts from server</button>
      </center>
    </>
  );
};

export default WelcomeMessage;
