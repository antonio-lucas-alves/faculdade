const newsService = require("../services/newsService");

class NewsController {
  getAllNews(req, res) {
    const newsList = newsService.getAllNews();
    res.json(newsList);
  }

  getNewsById(req, res) {
    const news = newsService.getNewsById(Number(req.params.id));
    if (!news)
      return res.status(404).json({ message: "Notícia não encontrada" });
    res.json(news);
  }

  createNews(req, res) {
    const { title, body, author } = req.body;
    const news = newsService.createNews(title, body, author);
    res.status(201).json(news);
  }

  updateNews(req, res) {
    const updatedNews = newsService.updateNews(Number(req.params.id), req.body);
    if (!updatedNews)
      return res.status(404).json({ message: "Notícia não encontrada" });
    res.json(updatedNews);
  }

  deleteNews(req, res) {
    const isDeleted = newsService.deleteNews(Number(req.params.id));
    if (!isDeleted)
      return res.status(404).json({ message: "Notícia não encontrada" });
    res.status(204).send();
  }
}

module.exports = new NewsController();
