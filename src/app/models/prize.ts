export class Prize {
    amount: string;
    prize: string;
    game: string;
    countdown: number;

    constructor() {
        this.amount = '';
        this.prize = '';
        this.game = '';
        this.countdown = 0;
    }
}