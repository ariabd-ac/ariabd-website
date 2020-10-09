// import React from "react";
// import { Col } from "react-bootstrap";
// import styled from "styled-components";
// import { Repo, Title, Lotties } from "../../atoms";
// import Ring from "../../../assets/animations/loader-ring.json";
// import Cargo from "../../../assets/others/cargo-ship.svg";

// class Github extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       reposistoryData: [],
//     };
//   }

//   componentDidMount() {
//     const url = "https://api.github.com/users/ariabd-ac/repos";
//     this.setState({ loading: true });
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ loading: false });
//         this.setState({ reposistoryData: data });
//       });
//   }

//   render() {
//     //console.log(this.state.reposistoryData[0]);
//     return this.state.loading === true ? (
//       <Lotties
//         animationData={Ring}
//         lh="5vw"
//         lw="5vw"
//         mh="10vw"
//         mw="10vw"
//       ></Lotties>
//     ) : (
//       <div className="mt-2 pt-2">
//         <Title title="Github projects" icon={Cargo}></Title>

//         <RepoContainer>
//           {this.state.reposistoryData.map((repo) => (
//             <Repo key={repo.id} repoData={repo} />
//           ))}
//         </RepoContainer>
//       </div>
//     );
//   }
// }

// export default Github;

// const RepoContainer = styled(Col)`
//   display: flex;
//   flex-wrap: wrap;
// `;

import React, { Component, Fragment } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Github.css";
import ImgThub from "../../../pictures/anothersample.jpg";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react";

export default class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 3,
      currentPage: 0,
    };
  }
  receivedData() {
    axios.get(`https://api.github.com/users/ariabd-ac/repos`).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((pd) => (
        <React.Fragment>
          <CardRepo
            style={{ width: "15rem" }}
            className="bg-dark text-white github-content"
          >
            <Card.Img src={ImgThub} alt="Card image" />
            {/* <img src={ImgThub} alt="" srcset="" /> */}
            <CardOverlay>
              <Info>
                <Group>
                  {/* <Card.Text className="mr-2">
                    <span className="mr-2">
                      <StarIcon /> {stargazers_count}
                    </span>
                  </Card.Text> */}
                  {/* <Card.Text className="mr-2">
                    <span className="mr-2">
                      <RepoForkedIcon /> {forks_count}
                    </span>
                  </Card.Text> */}

                  <Card.Text>
                    <a
                      href="https://github.com/ariabd-ac"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mr-2"
                    >
                      <FiGithub />
                    </a>
                  </Card.Text>
                  <p>{pd.name}</p>
                  {/* <p>{pd.full_name}</p> */}
                </Group>
              </Info>
            </CardOverlay>
          </CardRepo>
        </React.Fragment>
      ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),

        postData,
      });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  render() {
    return (
      <Fragment>
        {/* <div className="title">
          <h3>Github Repo</h3>
        </div> */}
        <div className="mt-2 pt-2 github-wrapper">
          {this.state.postData}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={0}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </Fragment>
    );
  }
}

const CardRepo = styled(Card)`
  border: none;
  border-radius: 15px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  margin: 1rem;

  & :hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

const RepoTitle = styled(Card.Text)``;

const CardOverlay = styled(Card.ImgOverlay)`
  margin: 0;
  padding: 8px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Group = styled.div`
  display: flex;
  justify-content: flex-start;
`;
