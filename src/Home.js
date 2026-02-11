const Home = () => {

    const handleClick = () => {
        console.log('you clicked me');
    }
    return (  
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick()}>Click Me</button>
        </div>
    );
}
 
export default Home;