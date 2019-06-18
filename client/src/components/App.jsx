import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Reviews from './reviews';


const Mod = styled.div`
  padding: 0px 40px 40px;
  font: 15px;
  background-color: white;
  overflow: scroll;
  @font-face {
    font-family: "Calibre-Regular";
    src: url("http://localhost:3005/fonts/CalibreWeb-Regular.woff2") format("woff2");
  }
  @font-face {
    font-family: "Calibre-Semibold";
    src: url("http://localhost:3005/fonts/CalibreWeb-Semibold.woff2") format("woff2");
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [],
    };
  }

  componentDidMount() {
    let pathId = window.location.pathname.substring(13);
      $.ajax({
        type: 'GET',
        url: `/api/restaurants/${pathId}/googlereviews`,
        success: (data) => {
          this.setState({
            current: data,
          });
        },
        err: (err) => {
          console.log(err);
        }
    });
  }

  render() {
    const { current } = this.state;
    return (
      <Mod>
        <Reviews db={current} />
      </Mod>
    );
  }
}
export default App;
