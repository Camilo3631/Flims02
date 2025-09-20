import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

type Movie = {
  name: string;
  available: number;
  quantity: number;
  image: string;
};

type Movies = Array<Movie>;

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Movies'; 
    movies: Movies = [
      { name: 'Avengers', available: 3, quantity: 0, image: 'assets/avengers.jpg' },
      { name: 'El Correo de varsovia', available: 5, quantity: 0, image: 'assets/Correo.jpg' },
    ];
    


  addMovieQuantity(movieName: string) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    this.movies[movieIndex].quantity += 1;
  }

  removeMovieQuantity(movieName: string) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    this.movies[movieIndex].quantity -= 1;
  }
}
