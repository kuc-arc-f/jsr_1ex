export default eventHandler(async (event) => {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>task_project_export</title>
  <link href="/output.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js"></script>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/static/task_project_export.js"></script>
</body>
</html>
  `;
});
