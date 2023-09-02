import React from "react";
import './assets/scss/App.scss';
import Counter from "@js/components/Counter";
import Movies from "@js/pages/Movies";

function Header() {
    return (
        <header className={ "site-header" }>
            <nav>
                <a href="">a</a>
                <a href="">b</a>
                <a href="">c</a>
            </nav>
        </header>
    );
}

function Main() {
    return (
        <main className={ "site-main" }>
            <Movies />
        </main>
    );
}

function Footer() {
    return (
        <footer className={ "site-footer" }>
            <span>My site</span>
        </footer>
    )
}

/*function App() {
    return (
        <>
            <Header/>
            <Main />
            <Footer />
        </>
    );
}*/

function App() {
    return (
       <Movies />
    );
}

export default App;
