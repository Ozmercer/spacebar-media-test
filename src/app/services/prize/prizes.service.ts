import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prize } from 'src/app/models/prize';

@Injectable({
  providedIn: 'root'
})
export class PrizesService {

  constructor(protected http: HttpClient) { }

  private async getPrizes(): Promise<{ data: Prize[] }> {
    const prizesUrl = 'assets/DB/prizes-data.json';
    let response;
    try {
      response = await this.http.get(prizesUrl).toPromise();
    } catch (err) {
      console.log(err);
    }

    return response;
  }

  async randomPrize(): Promise<Prize> {
    let response;
    await this.getPrizes().then(prizes => {
      const randIdx = Math.floor(Math.random() * prizes.data.length);
      response = prizes.data[randIdx];
    });

    return response;
  }
}
