export class Prize {
    amount: string;
    prize: string;
    game: string;
    countdown: number;
    claimed: boolean;

    constructor() {
        this.amount = '';
        this.prize = '';
        this.game = '';
        this.countdown = 0;
        this.claimed = false;
    }
}