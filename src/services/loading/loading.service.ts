import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }


  private obterLegenda(): HTMLElement {
    const legenda = document.createElement("p");

    legenda.style.textAlign = "center";
    legenda.style.fontSize = "18px";
    legenda.style.marginTop = "30vh";

    legenda.innerText = "Processando";

    return legenda;
  }

  private obterLoader(): HTMLElement {

    const loader: HTMLElement = document.createElement("div");

    loader.style.cssText = `
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      -webkit-animation: spin 2s linear infinite; 
      animation: spin 2s linear infinite;
      margin: 0 auto;`;

    return loader;
  }

  public inserir() {

    const loader = this.obterLoader();
    const legenda = this.obterLegenda();
    const loaderContainer = document.createElement("app-loader");

    loaderContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: white;
      z-index: 999;
    `;

    loaderContainer.append(legenda);
    loaderContainer.append(loader);

    document.querySelector("body")?.append(loaderContainer);
  }

  public remover() {

    const loadingElement: HTMLElement | null = document.querySelector("app-loader");

    if (loadingElement)
      loadingElement.remove();
  }
}
