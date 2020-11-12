import './App.css';
import $ from 'jquery';
import Frame from './Frame';

function App() {
  return (
    <div className="container-fluid d-flex justify-content-around vh-100">
      <Frame ID='editor' />
      <Frame ID='previewer' />
    </div>
  );

  // function resize(event) {
  //   let container = event.target.closest('.container-fluid'),
  //       currentWindowId = event.target.closest('.flex-column').querySelector('textarea').id,
  //       sibilingWindow = Array.from(container.children).find(child => child.querySelector('textarea').id !== currentWindowId);

  //   if(sibilingWindow) {
  //     hiddenWindow = sibilingWindow;
  //     $(sibilingWindow).remove();
  //   } else {
  //     switch(currentWindowId) {
  //       case 'editor':
  //         container.append(hiddenWindow);
  //         break;

  //       case 'previewer':
  //         container.prepend(hiddenWindow);
  //         break;
  //     }
  //   }
  // }
}

export default App;