import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from '../../modules/service/services/dictionary.service';
import { ApiService } from '../../modules/service/services/api.service';
import { ServiceModule } from '../../modules/service/services.module';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ITermResult } from '../../modules/models';

/*Component Test Cases*/
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule, ServiceModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Check the component
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Check the Input
  it('input box exist', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeDefined();
  });

  // Check the search heading
  it('should render search heading in a p tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('search for letter or word');
  });

  // Check the input box value
  it('assigned "a" and check input box should contain "a" value', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = 'a';
    // expect(compiled.querySelector('input').value).toBeFalsy();
    expect(compiled.querySelector('input').value).toContain('a');
  });

  // Check the input box placeholder
  it('input box should contain placeholder', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').placeholder).toContain('Enter Search Value!');
  });
});

/*Service Test Cases*/
describe('DictionaryService', () => {
  let dictionaryService: DictionaryService; // Add this
  let searchTerm: {
    [key: string]: ITermResult;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryService, ApiService, HttpClient, HttpHandler]
    });

    dictionaryService = TestBed.get(DictionaryService);
  });

  // checking the dictionary servive
  it('should be created', () => {
    expect(dictionaryService).toBeTruthy();
  });

  // Api testing
  describe('fetchRecords', () => {
    it('should return a collection of dictionary words', () => {
      const list = {
        list: [
          {
            definition: '[Snapchat]',
            word: 'sc'
          },
          {
            definition: '1. [South Carolina]\r\n2. [Snapchat]\r\n3. [So cute]',
            word: 'sc'
          },
          {
            definition:
              '[Sc] stands for [Snap Chat], a Social Media where you can take pictures or film 10 second videos with filters including dog faces or flower [crowns]. You can send the pictures to your story or to someone privately, but the catch is that you can only see the picture or video for 1-10 seconds. You can also have streaks with friends.',
            word: 'sc'
          },
          {
            definition:
              '[StarCraft] - the best realtime [strategy] game ever made. \r\nThis game requires more skill than any [game on] the market at the moment!',

            word: 'sc'
          },
          {
            definition:
              'Silent [Chuckle].  When something is funny, but not so funny to deserver an lol or a [rofl]... but the situation is amusing enough to make you [chuckle] silently to yourself.',
            word: 'sc'
          },
          {
            definition:
              'Abbreviation of "[Seedy] cunt" or "Seedy cunts." Mainly people who sneak off behind peoples backs and do [seedy] [sly] things.',
            word: 'SC'
          },
          {
            definition:
              "Santa Cruz, the best city eva, located in NOR CAL, an hour south of san francisco, where the [wetsuit] and cold water surfing were invented, home of Santa cuz sakteboards and [O'neill's] [Surf Shop] and The Santa Cruz Beach Board Walk",
            word: 'sc'
          },
          {
            definition:
              'Code for "[shitcanned]". Used by managers and employees during general [water cooler] discussion as a means of avoiding sounding alarm about an approaching layoff. While the word "shitcanned" has been around for years, the code "SC" has only become commonplace during the [economic downturn] of 2008 and 2009.',
            word: 'SC'
          },
          {
            definition: '[Server] [Check] ',
            word: 'sc'
          },
          {
            definition:
              'SC is a [Stoned] Child by birth. u can tell if someone is [a stone] child by if they look [stoned] (high) or act and they arent stoned or high. [SCs] is more this one SC.',
            word: 'SC'
          }
        ]
      };
      let response;
      spyOn(dictionaryService, 'fetchRecords').and.returnValue(of(list));

      dictionaryService.fetchRecords('catalogue').subscribe((res) => {
        response = res;
      });
      expect(response).toEqual(list);
    });
  });
});
