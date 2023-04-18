# Preeti-Toppo-_-Front-End
Steeleye Assignment Submission

1. Explain what the simple List component does.
   This list component takes an array of items as a prop and renders a list of SingleListItem components, one for each item in the array. When the list item is clicked, it calls the onClickHnadler prop with the index prop as an argument that changes the background-color of the single list item from red to green.

2. What problems / warnings are there with code?
   1. In useState hook we initialize variable name first then the function name and initial value here will be null
         Error -  const [setSelectedIndex, selectedIndex] = useState();
         Corrected - const [selectedIndex, setSelectedIndex] = useState(null);
   
   2. PropTypes.shapeOf is not a method so use PropTypes.shape
   
   3. Using array instead of arrayOf would allow any type of value to be passed as an array to item prop, instead use arrayOf to prevent errors or unexpected behavior caused by passing invalid data to the component.
          Error - WrappedListComponent.propTypes = {
                      items: PropTypes.array(PropTypes.shapeOf({
                        text: PropTypes.string.isRequired,
                   })),
          Corrected  - WrappedListComponent.propTypes = {
                      items: PropTypes.arrayOf(PropTypes.shape({
                        text: PropTypes.string.isRequired,
                   })),    
                   
    4.  selectedIndex should be equal to index to change the background color of the selected index only.
        Corrected -  isSelected={selectedIndex === index}
        
    5. use key to provide unique value to each item so that only the selected id item will change its backgroud color.
           Corrected - const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
                        return (
                          <li
                            key={index}
                            style={{ backgroundColor: isSelected ? "green" : "red" }}
                            onClick={() => onClickHandler(index)}
                          >
                            {text}
                          </li>
                        );
                      });    
                      
    6. Pass prop from the app.jsx
              import React from "react";
              import "./App.css";
              import List from "./List";

              function App() {
                const items = [
                  { text: "Block 1" },
                  { text: "Block 2" },
                  { text: "Block 3" },
                  { text: "BLock 4" },
                  { text: "Block 5" },
                ];

                return (
                  <div className="App">
                    <List items={items} />
                  </div>
                );
              }

              export default App;

   
