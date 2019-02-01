import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.PureComponent {
  state = {
    visible: false,
    isLiked: false,
  }
  handleReadMoreClck = e => {
    e.preventDefault()
    this.setState({ visible: true })
  }
  handleClickLike = () => {
    this.setState({ isLiked: !this.state.isLiked })
    this.props.changeLikesNumber(this.props.data.id, this.state.isLiked)
  }
  render() {
    const { author, text, bigText, likes } = this.props.data
    const { visible, isLiked } = this.state
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        <p
          onClick={this.handleClickLike}
          className={`news__likes ${isLiked ? 'news__likes_clicked' : ''}`}
        >
          {likes} ❤
        </p>
        {!visible && (
          <a
            onClick={this.handleReadMoreClck}
            href="#readmore"
            className="news__readmore"
          >
            Подробнее
          </a>
        )}
        {visible && <p className="news__big-text">{bigText}</p>}
      </div>
    )
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired, // добавили id, это число, обязательно
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  changeLikesNumber: PropTypes.func.isRequired,
}

export { Article }
