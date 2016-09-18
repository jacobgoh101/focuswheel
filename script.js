class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          step: '1',
        };
    }
    render(){
        if(this.state.step == 1) {
            console.log('render');
            return (
                <WhatIsItThatIDontWant />
            );
        }
        return null;
    }
}

class WhatIsItThatIDontWant extends React.Component  {
    componentDidMount(){
        this.refs.textarea.focus();
    }
    componentDidUpdate(){
        this.refs.textarea.focus();
    }
    render() {
        return (
            <div className="form-group form-viewport-centered">
                <label><h3 className="title big">What is it that I don't want?</h3></label>
                <textarea className="form-control" rows={3} defaultValue={""} ref="textarea" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));