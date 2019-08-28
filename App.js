import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem, Preloader } from 'react-materialize';

class App extends Component {
   render() {
      return (
         <div>
            <Row>
               <Col s={4}>
                  {/* <Preloader size="big" /> */}
               </Col>
               <Col s={4}>
                  <Preloader flashing />
               </Col>
               <Col s={4}>
                  {/* <Preloader size="small" /> */}
               </Col>
            </Row>

         <Collapsible accordion={true}>
            <CollapsibleItem header="Better then tee safe than sorry. That's my motto." icon="filter_drama">
               Better safe than sorry. That's my motto.
               </CollapsibleItem>
            <CollapsibleItem header="Yeah, you do seem to have a little 'shit creek' ac…" icon="place">
               Yeah, you do seem to have a little 'shit creek' action going.
               </CollapsibleItem>
            <CollapsibleItem header="You know, FYI, you can buy a paddle. Did you not p…" icon="whatshot">
               You know, FYI, you can buy a paddle. Did you not plan for this contingency?App
               </CollapsibleItem>
         </Collapsible>
             
         </div >
      );
   }
}
export default App;