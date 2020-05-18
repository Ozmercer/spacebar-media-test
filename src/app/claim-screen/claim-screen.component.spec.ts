import { async, ComponentFixture, TestBed, tick, fakeAsync, discardPeriodicTasks } from '@angular/core/testing';	

import { ClaimScreenComponent } from './claim-screen.component';	
import { Injectable } from '@angular/core';
import { PrizesService } from '../services/prize/prizes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Prize } from '../models/prize';

@Injectable()
class PrizeServiceStub extends PrizesService {

  constructor(public http: HttpClient) {
    super(http);
  }

  randomPrize(): Promise<Prize> {
      let prize = new Prize();
      prize.amount = '50';
      prize.claimed = false;
      prize.prize = 'Free Spins';
      prize.countdown = 3;
      prize.game = 'Gemix';

      return Promise.resolve(prize);
  }
}

describe('ClaimScreenComponent', () => {	
  let component: ClaimScreenComponent;	
  let fixture: ComponentFixture<ClaimScreenComponent>;	

  beforeEach(async(() => {	
    TestBed.configureTestingModule({	
      declarations: [ ClaimScreenComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        {provide: PrizesService, useClass: PrizeServiceStub},
      ]	
    })	
    .compileComponents();	
  }));	

  beforeEach(() => {	
    fixture = TestBed.createComponent(ClaimScreenComponent);	
    component = fixture.componentInstance;	
    fixture.detectChanges();	
  });	

  it('should countdown', fakeAsync(() => {	
    const initialTime = 3;
    component.prize = new Prize();
    component.prize.countdown = initialTime;
    
    component.ngOnInit();
    tick(1000);
    expect(component.prize.countdown).toEqual(initialTime - 1);	

    tick(1000);
    expect(component.prize.countdown).toEqual(initialTime - 2);	

    discardPeriodicTasks();
  }));	

  it('should stop countdown when reacing 0', fakeAsync(() => {	
    const initialTime = 1;
    component.prize = new Prize();
    component.prize.countdown = initialTime;
    
    component.ngOnInit();
    tick(2000);
    
    expect(component.prize.countdown).toEqual(0);	
    discardPeriodicTasks();
  }));	
});	
