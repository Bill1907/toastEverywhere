document.body.onload = init;

function init() {
  let toastList = [];
  const app: HTMLElement | null = document.getElementById('app');
  if (app) {
    addH1Title(app);
    const toastArea = createToastArea(app);
    createToast(toastArea);
    createToast(toastArea);
    createToast(toastArea);
    createToast(toastArea);
    const toast = createToast(toastArea);
    console.log(toast);
  }
}

function addH1Title(app: HTMLElement): void {
  const element: HTMLElement = document.createElement('h1');
  element.innerText = 'Delicious Toast';
  app?.appendChild(element);
}

function createToastArea(app: HTMLElement): HTMLElement {
  const toastArea: HTMLElement = document.createElement('div');
  toastArea.className = 'toast-area';
  app.appendChild(toastArea);
  return toastArea;
}

function createToast(parent: HTMLElement): HTMLElement {
  const element: HTMLElement = document.createElement('div');
  element.className = 'toast';
  parent?.appendChild(element);
  return element;
}

function successToastStyle(toast: HTMLElement): void {
  toast.style.backgroundColor = 'blue'

}
