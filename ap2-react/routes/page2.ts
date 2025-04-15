export default eventHandler(async (event) => {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>page2</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/static/page2.js"></script>
</body>
</html>
  `;
});
