export class HttpTask{
  static TASKS = {}
  constructor() { 
    this.id = Math.random().toString(36).substr(2)
  }
  abort() {
    if (HttpTask.TASKS[this.id] && HttpTask.TASKS[this.id].abort) {
      HttpTask.TASKS[this.id].abort()
      delete HttpTask.TASKS[this.id]
    }
  }
  getTask() {
    return HttpTask.TASKS[this.id]
  }
}