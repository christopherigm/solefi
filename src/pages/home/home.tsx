import NavBar from 'src/modules/nav-bar/nav-bar';
import ChartExample from 'src/modules/examples/chart-example/chart-example';
import InputExamples from 'src/modules/examples/materialize/inputs-examples';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        Home Section
        <InputExamples />
        <ChartExample />
      </div>
    </>
  );
};

export default Home;
