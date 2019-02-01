import React from 'react'
import update from 'immutability-helper'
import { Add } from './components/Add'
import { News } from './components/News'
import './App.css'

class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
    likedNewsId: null,
  }
  static getDerivedStateFromProps(props, state) {
    let nextFilteredNews

    // смотрим в state.news (ранее смотрели в props)
    // и проверяем, чтобы не клоинировать null
    // например, в момент первой отрисовки
    if (Array.isArray(state.news)) {
      nextFilteredNews = [...state.news]

      nextFilteredNews.forEach((item, index) => {
        if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
          item.bigText = 'СПАМ'
        }
      })

      return {
        filteredNews: nextFilteredNews,
      }
    }

    return null
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('http://localhost:3000/data/newsData.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTimeout(() => {
          this.setState({ isLoading: false, news: data })
        }, 1000)
      })
  }
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news]
    this.setState({ news: nextNews })
  }
  changeLikesNumberHandler = (likedNewsId, isLiked) => {
    this.setState({
      news: update(this.state.news, {
        [this.state.news.findIndex(newsItem => newsItem.id === likedNewsId)]: { likes: {$apply: (x) =>  isLiked ? --x : ++x} }
      })
    })
  }
  render() {
    const { news, isLoading } = this.state

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && (
          <News data={news} changeLikesNumber={this.changeLikesNumberHandler} />
        )}
      </React.Fragment>
    )
  }
}

export default App
