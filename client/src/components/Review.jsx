/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 24px 0px 27px;
  display: flex;
  justify-content: space-between;
`;

const TextInfo = styled.div`
  color: #101820;
  font:  15px/20px 'Calibre-Regular';
  letter-spacing: .013em;
  width: 80%;
`;

const Photo = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`;

const Date = styled.div`
  color: #656666;
  line-height: 32px;
  font:  15px/20px 'Calibre-Regular';
  letter-spacing: .013em;
  `;

const SeeMore = styled.span`
  color: grey;
`;

const Reviewer = styled.div`
  color: #101820;
  font: 15px Calibre-Regular;
`;

const Rating = styled.span`
`;

const Star = styled.svg`
  fill: ${props => props.color};
  height: 20px;
  width: 20px;
`;

const TextReview = styled.span`
  color: #101820;
  font: 15px/20px 'Calibre-Regular';
  letter-spacing: .013em;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
    };
  }

  renderStars() {
    const stars = [];
    const { review: { rating } } = this.props;

    for (let i = 0; i < rating; i += 1) {
      stars.push(<Star color="black" alt="something" key={i}><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" /></Star>);
    }
    for (let i = rating; i < 5; i += 1) {
      stars.push(<Star color="grey" alt="something" key={i}><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" /></Star>);
    }

    return (
      <Rating>
        { stars }
      </Rating>
    );
  }

  render() {
    const {
      review: {
        reviewer, picture, date_posted, text_review,
      },
    } = this.props;

    let text = text_review;
    if (text.length > 200 && !this.state.dropdown) {
      text = (
        <span>
          { text.slice(0, 200) }
          <SeeMore> ... See more</SeeMore>
        </span>
      );
    }

    return (
      <ReviewContainer>
        <Photo src={picture} alt={picture} />
        <TextInfo>
          <Reviewer>{reviewer}</Reviewer>
          <Date>{date_posted}</Date>
          <div onClick={() => { this.setState({dropdown: !this.state.dropdown}) }}>
            {this.renderStars()}
            <TextReview>{text}</TextReview>
          </div>
        </TextInfo>
      </ReviewContainer>
    );
  }
}

export default Review;
