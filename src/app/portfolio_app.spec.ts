import { TestBed } from '@angular/core/testing';
import { PortfolioApp } from './portfolio_app';

describe('PortfolioApp', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PortfolioApp
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PortfolioApp);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PortfolioApp);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('portfolio-2022 app is running!');
  });
});
