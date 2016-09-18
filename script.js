class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          step: '1',
        };
    }
    render(){
        if(this.state.step == 1) {
            return (
                <WhatIsItThatYouDontWant />
            );
        }
        return null;
    }
}

class WhatIsItThatYouDontWant extends React.Component  {
    componentDidMount(){
        this.refs.textarea.focus();
    }
    componentDidUpdate(){
        this.refs.textarea.focus();
    }
    render() {
        return (
            <div className="form-group form-viewport-centered">
                <label htmlFor="comment"><h3 className="title big">What is it that you don't want?</h3></label>
                <textarea className="form-control" rows={3} defaultValue={""} ref="textarea" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));