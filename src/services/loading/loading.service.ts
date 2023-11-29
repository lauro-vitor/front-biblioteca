import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  public inserir() {

    const loadingElement = document.createElement("app-loading");

    loadingElement.style.position = "absolute";
    loadingElement.style.top = "0";
    loadingElement.style.left = "0";
    loadingElement.style.width = "100vw";
    loadingElement.style.height = "100vh";
    loadingElement.style.backgroundColor = "white";
    loadingElement.style.zIndex = "999";

    document.querySelector("body")?.append(loadingElement);
  }
  
  public remover() {

    const loadingElement: HTMLElement | null = document.querySelector("app-loading");

    if (loadingElement != null)
      loadingElement.innerHTML = "";
  }
}
