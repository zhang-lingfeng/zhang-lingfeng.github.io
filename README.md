# zhang-lingfeng.github.io

张凌峰（Lingfeng Zhang）的个人主页：<https://zhang-lingfeng.github.io>

基于 Jekyll 和 [al-folio](https://github.com/alshedivat/al-folio) 主题搭建。现在换成了暖色、衬线标题的 Claude 风格，模板自带但没用到的示例、文档和工具也已删掉。

## 内容放在哪里

| 想改什么 | 改这个文件 |
| --- | --- |
| 首页简介 | `_pages/about.md` 的正文 |
| 首页的研究方向、经历、代表作、荣誉 | `_pages/about.md` 顶部的 front matter（`interests` / `timeline` / `featured` / `honors`） |
| 新闻 | `_news/` 目录，每条新闻一个 `.md` 文件 |
| 论文 | `_bibliography/papers.bib`；带 `selected={true}` 的会出现在首页，`preview=` 指向缩略图 |
| 论文缩略图 | `assets/img/publication_preview/` |
| Research Gallery 页面 | `_pages/research gallery.md` |
| 名字、站点描述、页脚那句话 | `_config.yml` 里的 `first_name`、`last_name`、`description`、`contact_note` |
| 邮箱、GitHub、Google Scholar | `_data/socials.yml` |
| 配色（浅色和深色） | `_sass/_themes.scss` |
| 版式和组件样式 | `_sass/_claude.scss` |

## 本地预览

需要 Ruby 3.x 和 Bundler：

```bash
bundle install
bundle exec jekyll serve
```

然后打开 <http://localhost:4000>。

## 发布

推送到 `main` 分支后，`.github/workflows/pages-deploy.yml` 会自动构建并发布到 GitHub Pages。
