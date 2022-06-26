import { Notification } from '@vaadin/notification';
import { LitElement, html, css } from 'lit';

export class NotificationElement extends LitElement {
  constructor() {
    super();
    this._message = 'Default Notification';
    this._show = false;
    this._notificationOpened = false;

    this._reregisterhandler();
  }

  render() {
    return html`${this._show ? this._showNotification() : html``}`;
  }

  async _reregisterhandler() {
    // let newScript = document.createElement('script');
    // newScript.type = 'module';
    // newScript.src =
    //   'https://www.threedsoftware.com/_functions/lixnotification/upgraded.js';
    // window.document.head.appendChild(newScript);
  }

  _showNotification(message) {
    console.log('Showing notification');
    Notification.show(
      message || "This is a notification That we are 0'd out!",
      {
        // position: 'bottom-stretch',
        position: 'top-end',
        theme: 'success',
      }
    );
    Notification.show(
      html`<button @click=${this._promptTest}>${this._message}</button>`,
      {
        duration: '0',
        position: 'bottom-stretch',
        theme: 'contrast',
      }
    );
    this._notificationOpened = true;
  }
  /**
   * @param {PropertyValueMap} changedProperties
   */
  hasUpdated(changedProperties) {
    if (changedProperties.has('showMessage')) {
      //Then we rerender;
      console.log('Important Property');
      this._message = this.getAttribute('showMessage');
      console.log(this.getAttribute('showMessage'));
      console.log(this.getAttribute('showmessage'));
      console.log(this._message);
      this._showNotification(this._message);
    } else {
      console.log('Nothing important');
    }
  }

  _promptTest(e) {
    alert('Showing');
  }
}

NotificationElement.properties = {
  _message: { type: String, attribute: true },
  showMessage: { attribute: 'showmessage', reflect: false, type: String },
  _show: { type: Boolean },
  _notificationOpened: { type: Boolean },
};

customElements.define('notification-element', NotificationElement);
