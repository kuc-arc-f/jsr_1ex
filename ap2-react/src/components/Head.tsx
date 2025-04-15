import {Link } from 'react-router-dom';

function Page() {
  return (
  <>
    <div>
      <a href="/">Home</a>
      <a href="/about"> [ about ]</a>
      <span><a href="/page1"> [ page1 ]</a>
      </span>
      <span><a href="/page2"> [ page2 ]</a>
      </span>
      <span><a href="/page3"> [ page3 ]</a>
      </span>
      <span><a href="/page4"> [ page4 ]</a>
      </span>

      <hr />
    </div>
  </>
  );
}
export default Page;
