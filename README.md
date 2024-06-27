## 🏡 Personal Project: Booking Web App
_This template is inspired from Booking.com_

### 📚 Tech stack
- JS Lib: [React](https://react.dev/)
- Bundler/Build Tool: [Vite](https://vitejs.dev/guide/)
- Styling: PostCSS, TailwindCSS, Autoprefixer

### 👉 How to run
Comment out this line `// base: '/Booking-App-Template/'` in vite.config.js
```
export default defineConfig({
  plugins: [react()],
  // base: '/Booking-App-Template/',
});
```
<br/>

Provided that you had NodeJS & NPM installed. Open your terminal then run:
<br/>

1. Navigate to React project directory
```
cd <react-project package name>
```
<br/>

2. Install all the necessary dependencies (packages) specified in the package.json file
```
(sudo npm cache clean --force)
npm install (npm i)

#[Optional] Update the Latest Version of React & its dependencies
npm install react@latest react-dom@latest react-router-dom@latest
```
<br/>

3. Start a Development Server
```
npm run dev
```
> [!TIP]
> You should keep that Server up & running as long as you're working on your code:
> <br/>
> --> ❗️it will update/reflect on the preview website whenever you save changes to your code
> <br/>
> --> ❗️Quit anytime via CTRL + C, restart it once you start working again (`npm run dev`)
> <br/>
> <br/>
> To create a production bundle, use `npm run build` or `yarn build`.
