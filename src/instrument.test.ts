import { getViewName } from "./instrument";

describe('getViewName', () => {
  it('Should return /home-EN', () => {
    const viewName = getViewName('/', undefined);
    expect(viewName).toBe('/home-EN');
  })
  it('Should return /home-ES', () => {
    const viewName = getViewName('/es', undefined);
    expect(viewName).toBe('/home-ES');

  })
  it('Should return /home-EU', () => {
    const viewName = getViewName('/eu', undefined);
    expect(viewName).toBe('/home-EU');
  })
  it('Should return /home-FR', () => {
    const viewName = getViewName('/fr', undefined);
    expect(viewName).toBe('/home-FR');

  })
  it('Should return /article-EN', () => {
    const viewName = getViewName('/', 'article');
    expect(viewName).toBe('/article-EN');
  })
  it('Should return /article-ES', () => {
    const viewName = getViewName('/es', 'article');
    expect(viewName).toBe('/article-ES');
  })
  it('Should return /article-EU', () => {
    const viewName = getViewName('/eu', 'article');
    expect(viewName).toBe('/article-EU');

  })
  it('Should return /article-FR', () => {
    const viewName = getViewName('/fr', 'article');
    expect(viewName).toBe('/article-FR');
  })
  it('Should return /microsoft-EN', () => {
    const viewName = getViewName('/', 'microsoft');
    expect(viewName).toBe('/microsoft-EN');
  })
  it('Should return /microsoft-ES', () => {
    const viewName = getViewName('/es', 'microsoft');
    expect(viewName).toBe('/microsoft-ES');
  })
  it('Should return /microsoft-EU', () => {
    const viewName = getViewName('/eu', 'microsoft');
    expect(viewName).toBe('/microsoft-EU');
  })
  it('Should return /microsoft-FR', () => {
    const viewName = getViewName('/fr', 'microsoft');
    expect(viewName).toBe('/microsoft-FR');
  })
  it('Should return /paquier-EN', () => {
    const viewName = getViewName('/', 'paquier');
    expect(viewName).toBe('/paquier-EN');
  })
  it('Should return /paquier-ES', () => {
    const viewName = getViewName('/es', 'paquier');
    expect(viewName).toBe('/paquier-ES');
  })
  it('Should return /paquier-EU', () => {
    const viewName = getViewName('/eu', 'paquier');
    expect(viewName).toBe('/paquier-EU');

  })
  it('Should return /paquier-FR', () => {
    const viewName = getViewName('/fr', 'paquier');
    expect(viewName).toBe('/paquier-FR');
  })
  it('Should return /illustrations', () => {
    const viewName = getViewName('/illustrations', undefined);
    expect(viewName).toBe('/illustrations');

  })
  it('Should return /animations', () => {
    const viewName = getViewName('/animations', undefined);
    expect(viewName).toBe('/animations');
  })
});