import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarLibroPage } from './listar-libro.page';

describe('ListarLibroPage', () => {
  let component: ListarLibroPage;
  let fixture: ComponentFixture<ListarLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
