import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotComponent } from './chat-bot.component';
import { ChatBotService } from './chat-bot.service'
describe('ChatComponent', () => {
  let component: ChatBotComponent;
  let fixture: ComponentFixture<ChatBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('ChatBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatBotService]
    })
  })

  it('should be created', inject([ChatBotService], (service: ChatBotService) => {
    expect(service).toBeTruthy()
  }))
})
