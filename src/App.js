import './App.css';
import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        bodySticker: [],
    }
    this.bodysRef = React.createRef()

  }

  addNote = () => {
    let title = this.bodysRef.current.value
    let titles =  this.state.bodySticker
    titles.push(title)
    this.setState({
      'titles': title,
    })
    this.bodysRef.current.value = ''
  }

  myComment = () =>{
    console.log('comment');
  }

  render() {
    return (
      <>
      <div className="container">
            <div className="row justify-content-md-center">
            <div className="col-9 ">
              <h1 className="form__header">Hello Sticker</h1>
            <form className="formSticker">
              <div className="mb-3">
                <label htmlFor="body">Введите текст сообщения</label>
                  <textarea type="text" id="body" ref={this.bodysRef} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.addNote}>Добавить запись</button>
              </form>
          </div>
        </div>
      </div>
  
                  <div className="container dashboard">
                    <div className="row">
              {
                    this.state.bodySticker.map((item, index) =>
                  <div key={index} className="card text-dark bg-warning mb-3 col-md-3">
                          <div className="card-header">Номер записи  -  {index}</div>
                       <div className="card-body">
                       <p className="card-text">{item}</p>
                         </div>
                          </div>
                    )}
                    </div>
                  </div>
      </>
    )
  };
}
export default App;
