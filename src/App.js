import styled from 'styled-components'
import GridItem from './Components/GridItem/GridItem';
import { Data } from './Data/demoData';

const Grid = styled.div`
  --grid-columns: 4;
  --grid-rows: 4;

  display: grid;
  grid-template-columns:
    repeat(
      auto-fit,
      minmax(min(200px, 100%), 1fr)
    );
`

function App() {
  return (
    <div className="App">
      <Grid>
        {Data.map((item, index) => (
          <GridItem
            key={index}
            variant={item.variant}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </Grid>
    </div>
  );
}

export default App;
