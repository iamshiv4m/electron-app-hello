import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
function App() {
  const ipcHandle = () => {
    window.electron.ipcRenderer.send('ping')
  }
  const serialPortHandle = () => {
    window.electron.ipcRenderer.send('serial-port')
    window.electron.ipcRenderer.on('serial-port-reply', (event, data) => {
      const finalPort = []
      for (const port of data) {
        console.log('port: ', port)
        if (!port.vendorId) {
          continue
        }
        finalPort.push(port)
        /* listenClickerEvent((eventNum, deviceID) => {
          console.log(count, 'he')
          console.log(deviceID)
          console.log(eventNum)
        }) */
        console.log('finalPort: ', finalPort)
      }
    })
  }

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={serialPortHandle}>
            Show serial port
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
