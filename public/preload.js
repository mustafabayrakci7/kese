const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  loadTasks: () => ipcRenderer.send('load-tasks'),
  onTasksLoaded: (callback) => ipcRenderer.on('tasks-loaded', (event, data) => callback(data)),
  saveTasks: (tasks) => ipcRenderer.send('save-tasks', tasks),
  onTasksSaved: (callback) => ipcRenderer.on('tasks-saved', callback)
});
