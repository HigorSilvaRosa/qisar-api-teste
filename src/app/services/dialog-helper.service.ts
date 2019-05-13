import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class DialogHelperService {

  constructor(
    private notificationsService: NotificationsService
  ) { }

  public askConfirmation(message: string, title: string = null): Promise<boolean> {
    return new Promise((resolve) => {
      if (!title) {
        title = "Você tem certeza?"
      }
      Swal.fire({
        title: title,
        text: message,
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
      }).then((result) => {
        resolve(result.value)
      })
    })
  }

  public showInfoAlert(message: string, title: string): Promise<void> {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        text: message,
        type: 'info',
        confirmButtonText: 'Ok',
      }).then(() => {
        resolve()
      })
    })
  }

  public showSuccessAlert(message: string, title: string = "Pronto!"): Promise<void> {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        text: message,
        type: 'success',
        confirmButtonText: 'Ok',
      }).then(() => {
        resolve()
      })
    })
  }

  public showErrorAlert(message: string, title: string = "Erro!"): Promise<void> {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        text: message,
        type: 'error',
        confirmButtonText: 'Ok',
      }).then(() => {
        resolve()
      })
    })
  }

  public showWarningAlert(message: string, title: string): Promise<void> {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        text: message,
        type: 'warning',
        confirmButtonText: 'Ok',
      }).then(() => {
        resolve()
      })
    })
  }

  private showNotification(type: string, title: string, message: string) {
    let options = {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    }
    if (type == "error") {
      options.timeOut = 0;
    }
    if (type == "success") {
      this.notificationsService.success(title, message, options);
    }
    if (type == "error") {
      this.notificationsService.error(title, message, options);
    }
    if (type == "warning") {
      this.notificationsService.warn(title, message, options);
    }
    if (type == "info") {
      this.notificationsService.info(title, message, options);
    }

  }

  public showSuccessNotification(message: string, title: string = "Pronto!"): void {
    this.showNotification("success", title, message)
  }

  public showErrorNotification(message: string, title: string = "Erro!"): void {
    this.showNotification("error", title, message)
  }

  public showWarningNotification(message: string, title: string = "Atenção!"): void {
    this.showNotification("warning", title, message)
  }

  public showInfoNotification(message: string, title: string = "Aviso!"): void {
    this.showNotification("info", title, message)
  }

}
