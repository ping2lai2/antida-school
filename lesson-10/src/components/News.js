import React from 'react'
import PropTypes from 'prop-types'
import { Article } from './Article'

class News extends React.Component {
  renderNews = () => {
    const { data, changeLikesNumber } = this.props
    let newsTemplate = null

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item} changeLikesNumber={changeLikesNumber} />
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return newsTemplate
  }
  render() {
    const { data } = this.props

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong className={'news__count'}>
            Всего новостей: {data.length}
          </strong>
        ) : null}
      </div>
    )
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired,
  changeLikesNumber: PropTypes.func.isRequired,
}

export { News }
