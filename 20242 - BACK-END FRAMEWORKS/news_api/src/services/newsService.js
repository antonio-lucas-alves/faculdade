const News = require("../models/newsModel");

class NewsService {
  constructor() {
    this.newsList = [];
    this.currentId = 1;
  }

  getAllNews() {
    return this.newsList;
  }

  getNewsById(id) {
    return this.newsList.find((news) => news.id === id);
  }

  createNews(title, body, author) {
    const news = new News(this.currentId++, title, body, author, new Date());
    this.newsList.push(news);
    return news;
  }

  updateNews(id, updatedData) {
    const newsIndex = this.newsList.findIndex((news) => news.id === id);
    if (newsIndex === -1) return null;

    this.newsList[newsIndex] = { ...this.newsList[newsIndex], ...updatedData };
    return this.newsList[newsIndex];
  }

  deleteNews(id) {
    const newsIndex = this.newsList.findIndex((news) => news.id === id);
    if (newsIndex === -1) return false;

    this.newsList.splice(newsIndex, 1);
    return true;
  }
}

module.exports = new NewsService();
