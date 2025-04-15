import { renderMove } from "../src/lib/renderUtil";

export default defineEventHandler(async (event) => {
  if(!event.context.user){ return renderMove(); }
  
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>about</title>
  <link href="/output.css" rel="stylesheet" />
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/static/page3.js"></script>
</body>
</html>
  `;
});
