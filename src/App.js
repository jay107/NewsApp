import react, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import "./style.css";
import SearchNews from "./components/SearchNews";

function App() {

  const [news, setNews] = useState("");
  const [search, setSearch] = useState("bitcoin");

  const API_KEY = "d4eeb79ada9e4603b2870fb49b15fd30";

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d4eeb79ada9e4603b2870fb49b15fd30`).then(data => setNews(data.data.articles));
  }, [])
  return (
    <>
      <Header />
      <Switch>

        <Route path="/" exact>
          <Grid container spacing={0} style={{ width: "100%", marginTop: "20px" }}>
            {/* <Grid item xs={8} md={2}>
             <Navbar />
             </Grid> */}
            <Grid item xs={12} md={4}>
              <Main news={news} search={search} />
            </Grid>
          </Grid>
        </Route>

        <Route path="/search-news" exact>
          <SearchNews search={search} setSearch={setSearch} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
