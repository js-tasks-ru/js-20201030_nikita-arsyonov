export default class NotificationMessage {
  // Статическое св-во, чтобы понять, есть ли уже NotificationMessage
  // без инициализации класса ( без создания объекта ), а обратившись к NotificationMessage.activeNotification,
  // где храним ссылку на элемент

  static activeNotification;

  constructor (
    message = '', {
    duration = 2000,
    type =  'success'
    } = {}) {

    // Убрать из документа NotificationMessage, если он уже есть
    if (NotificationMessage.activeNotification) {
      NotificationMessage.activeNotification.remove();
    }

    this.message = message;
    this.duration = duration;
    this.durationSeconds = duration / 1000; // перевести в секунды, иначе не идёт полоска!
    this.type = type;

    this.render();
  }

  getTemplate() {
    return `
      <div class="notification ${this.type}" style="--value:${this.durationSeconds}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">Notification</div>
          <div class="notification-body">
            ${this.message + Math.random()}
          </div>
        </div>
      </div>
    `
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstElementChild;

    // Сохранить ссылку на элемент
    NotificationMessage.activeNotification = this.element;
  }

  show(parent = document.body) {
    parent.append(this.element);

    // Через указанный интервал - убрать сообщение
    setTimeout( () => { this.remove(); }, this.duration);

  }

  remove () {
    this.element.remove();
  }

  destroy() {
    this.remove();
    NotificationMessage.activeNotification = null;
  }
}
