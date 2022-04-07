import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Hero from "./components/HeroSection/Hero";
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About"
import View from "./components/View/View";
import Work from "./components/Work/Work";
import Fun from "./components/FunSection/Fun";
import Content from "./components/content/content/Content";
import Books from "./components/content/Books/Books"
import Podcast from "./components/content/Podcast/Podcast";
import Painting from "./components/content/Painting/Painting";
import French from "./components/content/French/French";
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact";

function App() {
  return (

  <Router>

      <Navbar/>



      <Switch>
          <Route exact path="/">
         
            <Hero />
          <About/>
          <Work/>
           <Contact/>
          </Route>

          <Route path="/view/:id"  >
        
        <View/>
        <Contact/>
      </Route>
      <Route exact path="/fun"> 
          <Fun desc="Welcome to the fun section" title="Well, Looks like you've managed to find this page"/>
          <Content/>
          <Contact/>
          </Route>

<Route exact path="/books">
<Fun desc="I personally prefer Self-Help books over other genres. Check them out, Maybe you've read them long time ago. Let's go on a Memory Lane People! " title="Book Recommendations"/>
<Books/>
<Contact/>

</Route>
<Route exact path="/podcasts">
<Fun desc="I've been listening to podcasts since the start of CO-VID pandemic. It's like watching television except You are the one creating the visuals for the audio and I got a lot to learn about the storytelling." title="Podcast Recommendations"/>
<Podcast/>
<Contact/>
</Route>

<Route exact path="/paintings">
<Fun desc=" Whenever I come across a quote that I can relate to, in books or movies, I write them in my Phone and I go back to read them from time to time which brings back some memories and some Inspiration. "
 title="Quotes and Paradoxes"/>
<Painting/>
<Contact/>
</Route>
<Route exact path="/french">

<French/>
</Route>
  <Contact/>

          </Switch>


  </Router>
    

   

  
  );
}

export default App;
