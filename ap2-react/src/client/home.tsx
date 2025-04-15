import ReactDOM from 'react-dom/client'
import React from 'react'
import Head from "../components/Head";

const Page: React.FC = () => {
  return (
  <>
    <Head />
    <div className="text-3xl"><h1>home</h1> 
      <hr />
      <span><a href="/about">[ about ]</a>
      </span>
    </div>
  </>
  );
};
ReactDOM.createRoot(document.getElementById('app')).render(
  <div>
    <Page />
  </div>
);
