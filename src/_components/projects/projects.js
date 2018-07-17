import React, {Component} from 'react';
import './projects.css';
import ProjectCard from './project-card';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="Projects-heading">
          <h1>Moje Projekty</h1>
        </div>
        <article className="Projects-body">
          <p>Poniżej zamieszczam listę swoich projektów z krótkim opisem.</p>
          <div className="Projects-cards">
            <ProjectCard
              title="Generator Cytatów"
              framework="React"
              image='https://bborawski.pl/static/media/quote.jpg'
              url='http://projects.bborawski.pl/random-quote-generator'
              description="Cytaty oraz kolory podane są z góry. Wybór następuje poprzez generowanie losowej liczby. Dodałem też animację przejścia między kolorami."/>
            <ProjectCard
              title="Aplikacja Pogodowa"
              framework="React"
              image='https://bborawski.pl/static/media/weather.jpg'
              url='http://projects.bborawski.pl/get-weather'
              description="Aplikacja pobiera lokalizację użytkownika i z pomocą fetch pobiera prognozę pogody."/>
            <ProjectCard
              title="Simon Game"
              framework="React"
              image='https://bborawski.pl/static/media/simon.jpg'
              url='http://projects.bborawski.pl/simon'
              description="Aplikacja służyła do przetestowania funkcjonalności audio.onended i wyszło to bardzo ciekawie. Niestety, Chrome nie obsługuje tej funkcji. Sugeruję skorzystać z Firefox."/>
            <ProjectCard
              title="Kalkulator JavaScript"
              framework="React"
              image='https://bborawski.pl/static/media/calc.jpg'
              url='http://projects.bborawski.pl/calculator'
              description="Funkcjonalność zwykłego kalkulatora przeniesiona na przeglądarkę internetową."/>
            <ProjectCard
              title="CSS Playground"
              framework="React"
              image='https://bborawski.pl/static/media/css.jpg'
              url='http://projects.bborawski.pl/css-playground'
              description="Wyniki moich zabaw z CSS i szlifowaniem swoich umiejętności."/>
            <ProjectCard
              title="Kolekcja Gier Planszowych"
              framework="Angular 4"
              image='https://bborawski.pl/static/media/boardgames.jpg'
              url='http://projects.bborawski.pl/angular-board-games'
              description="Jeden z większych projektów wykonanych w nowym Angular, a największy bez wykorzystania jakiegokolwiek backend. Jest to baza na moją kolekcję gier planszowych. Nie zrobiłem jeszcze zdjęć wszystkich tytułów, ale to zostanie uzupełnione w przyszłości."/>
            <ProjectCard
              title="Wyszukiwarka Artykułów Wikipedii"
              framework="CodePen + jQuery"
              image='https://bborawski.pl/static/media/wikipedia.jpg'
              url='https://codepen.io/Borawski/pen/WMgVqP'
              description="Aplikacja łączy się z API Wikipedii i przeszukuje bazę artykułów. Można także uzyskać losowy artykuł. Planowane przepisanie na React."/>
            <ProjectCard
              title="Skaner streamów Twitch"
              framework="CodePen + jQuery"
              image='https://bborawski.pl/static/media/twitch.jpg'
              url='https://codepen.io/Borawski/pen/NyEgPK'
              description="Aplikacja sprawdza ustaloną listę streamerów z API Twitch i pokazuje, czy w danej chwili aktualnie jest coś streamowane. Planowane przepisanie na React."/>
            <ProjectCard
              title="Licznik Pomodoro"
              framework="CodePen + jQuery"
              image='https://bborawski.pl/static/media/pomodoro.jpg'
              url='https://codepen.io/Borawski/pen/KQEjeL'
              description="Minutnik sesji oraz przerwy. Po zakończeniu odliczania jednego z nich następuje automatyczne rozpoczęcie durgiego. Planowane przepisanie na React."/>
            <ProjectCard
              title="Kółko i Krzyżyk"
              framework="CodePen + jQuery"
              image='https://bborawski.pl/static/media/tictactoe.jpg'
              url='https://codepen.io/Borawski/pen/VQNrBW'
              description="Rozgrywka z komputerem, który losowo przypisuje swoje wybory. Brak implementacji strategii rozgrywki. Planowane przepisanie na React."/>
            <ProjectCard
              title="Projekty Free Code Camp"
              framework="React"
              image='https://bborawski.pl/static/media/fcc.png'
              url='http://projects.bborawski.pl/fcc'
              description="Projekty wykonane w ramach kursów Free Code Camp. Skondensowane w jeden link ze względu na ich ilość. Każdy projekt zawiera dołączony skrypt testowy od Free Code Camp w celu sprawdzenia poprawności wykonania zadania."/>
          </div>
        </article>
      </div>
    );
  }
}

export default Projects;