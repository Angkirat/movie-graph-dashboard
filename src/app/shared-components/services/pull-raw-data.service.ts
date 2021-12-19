import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../class/actor';
import { Entertainment } from '../class/entertainment';
import { Director } from '../class/director';
import { Writer } from '../class/writer';

@Injectable({
  providedIn: 'root'
})
export class PullRawDataService {
  actorList: any;
  entertainmentList: any;
  directorList: any;
  writerList: any;

  constructor(private http: HttpClient) {
    console.log("hello there");
    this.pullAllData();
   }

  getActorList() {
    console.log('Get list of Actors')
     return this.http.get('https://raw.githubusercontent.com/Angkirat/movie-graph-dashboard/development/data/actors.csv', {responseType: 'text'})
  }

  getTvList() {
    console.log('Get list of TV')
    return this.http.get('https://raw.githubusercontent.com/Angkirat/movie-graph-dashboard/development/data/tv.csv', {responseType: 'text'})
  }

  getMovieList() {
    console.log('Get list of Movies')
    return this.http.get('https://raw.githubusercontent.com/Angkirat/movie-graph-dashboard/development/data/movie.csv', {responseType: 'text'})
  }

  getDirectorList() {
    console.log('Get list of Directors')
    return this.http.get('https://raw.githubusercontent.com/Angkirat/movie-graph-dashboard/development/data/director.csv', {responseType: 'text'})
  }

  getWriterList() {
    console.log('Get list of Writers')
    return this.http.get('https://raw.githubusercontent.com/Angkirat/movie-graph-dashboard/development/data/writer.csv', {responseType: 'text'})
  }

  pullAllData() {
    this.getMovieList().subscribe(res => {
      var lines = res.split('\n')
      lines.slice(1).forEach(val=>{
        // (id: string, entertainmentType: string, releaseDate: string, title: string, genre: string, director: string, writer: string, photoUrl: string)
        var colValues = val.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        this.entertainmentList.push(new Entertainment(colValues[0],'movie',colValues[1],colValues[4],colValues[7],colValues[9],colValues[10],colValues[6]));
      });
    });
    this.getTvList().subscribe(res => {
      var lines = res.split('\n')
      lines.slice(1).forEach(val=>{
        // (id: string, entertainmentType: string, releaseDate: string, title: string, genre: string, director: string, writer: string, photoUrl: string)
        var colValues = val.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        this.entertainmentList.push(new Entertainment(colValues[0], 'tv', colValues[1], colValues[7], colValues[9],colValues[11], colValues[12], colValues[8]));
      });
    });
    this.getDirectorList().subscribe(res => {
      var lines = res.split('\n')
      lines.slice(1).forEach(val=>{
        // (id: string, name: string, gender: string, birthday: string, photoUrl: string)
        var colValues = val.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        this.directorList.push(new Director(colValues[0], colValues[4], colValues[7], colValues[1], colValues[6]));
      });
    });
    this.getWriterList().subscribe(res => {
      var lines = res.split('\n')
      lines.slice(1).forEach(val=>{
        // (id: string, entertainmentType: string, releaseDate: string, title: string, genre: string, director: string, writer: string, photoUrl: string)
        var colValues = val.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        this.writerList.push(new Writer(colValues[0], colValues[4], colValues[7], colValues[1], colValues[7]));
      });
    });
    this.getActorList().subscribe(res => {
      var lines = res.split('\n')
      lines.slice(1).forEach(val=>{
        var colValues = val.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        // (id: string, name: string, birthday: string, image: string, gender: string, deathday: string)
        this.actorList.push(new Actor(colValues[0], colValues[4], colValues[1], colValues[6], colValues[7], colValues[2]));
      });
    });
  }

}
