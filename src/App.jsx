import React from 'react';
import GridLayout from "react-grid-layout";
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

class MyFirstGrid extends React.Component {
  render() {
    return (
      <GridLayout className="layout text-white text-3xl" cols={3} rowHeight={100} width={1260} height={720}>
      
        <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 3, static: false , autoSize: true, preventCollision: true
}} className='bg-[#1c8a72] rounded-2xl flex items-center justify-center'>
          First
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 2, h: 3 , autoSize: true , preventCollision: true}} className='bg-[#dc3f3f] rounded-2xl flex items-center justify-center'>
          Second
        </div>
        <div key="c" data-grid={{ x: 1, y: 1, w: 12, h: 2 , autoSize: true , preventCollision: true}} className='bg-[#3fdc83] rounded-2xl flex items-center justify-center'>
          Third
        </div>
      </GridLayout>
    );
  }
}
//  minW: 2, maxW: 4 
function App() {
  return (
<div className="min-w-full mr-12 bg-slate-800"><MyFirstGrid />
</div>
  );
}

export default App;