# ap7-svelte

 Version: 0.9.1

 Author  : 

 date    : 2025/04/14

 update  :

***

svelte JSR package , example

***
### setup
* nitro.config.ts
* apiUrl, apiKey set
```
export default defineNitroConfig({
  compatibilityDate: "2025-01-30",
  runtimeConfig: {
    apiUrl: "https://localhost",
    apiKey: "123",
  }
});

```

***
### API Server

https://github.com/kuc-arc-f/d1-project8git

***
* build
```
npx vite build
```
***
* dev-start

```
npm run prebuild
npm run dev

#OR
npm run prebuild && npm run dev
```

***
# License

* MIT

***
