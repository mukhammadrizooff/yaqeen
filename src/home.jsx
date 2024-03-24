import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Yaqeen";
  }, []);
  return <HomePage />;
};

export default Home;
