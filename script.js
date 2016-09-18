class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
        };
        this.nextStep = this.nextStep.bind(this);
    }
    nextStep(){
        this.setState({
            step: (this.state.step + 1)
        });
    }
    render(){
        switch(this.state.step) {
            case 1:
                return (
                    <WhatIsItThatIDontWant nextStep={this.nextStep} />
                );
                break;
            case 2:
                return (
                    <WhatDoIWant nextStep={this.nextStep} />
                );
                break;
            case 3:
                return (
                    <HowDoIFeelNowBefore nextStep={this.nextStep} />
                );
                break;
            case 4:
                return (
                    <HowDoIFeelNowNumberBefore nextStep={this.nextStep} />
                );
                break;
            default:
                return null;
        }
    }
}

class WhatIsItThatIDontWant extends React.Component  {
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    handleKeyUp(e){
        if( e.key == 'Enter' ) {
            if( !e.shiftKey ) this.props.nextStep();
        }
    }
    componentDidMount(){
        this.refs.textarea.value = '';
        this.refs.textarea.focus();
    }
    render() {
        return (
            <div className="form-group form-viewport-centered">
                <label><h3 className="title big">What is it that I don't want?</h3></label>
                <textarea className="form-control" rows={3} defaultValue={""} ref="textarea" onKeyUp={this.handleKeyUp} />
            </div>
        );
    }
}

class WhatDoIWant extends React.Component  {
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    handleKeyUp(e){
        if( e.key == 'Enter' ) {
            if( !e.shiftKey ) this.props.nextStep();
        }
    }
    componentDidMount(){
        this.refs.textarea.value = '';
        this.refs.textarea.focus();
    }
    render() {
        return (
            <div className="form-group form-viewport-centered">
                <label><h3 className="title big">What do I want?</h3></label>
                <textarea className="form-control" rows={3} defaultValue={""} ref="textarea" onKeyUp={this.handleKeyUp} />
            </div>
        );
    }
}

class HowDoIFeelNowBefore extends React.Component  {
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    handleKeyUp(e){
        if( e.key == 'Enter' ) {
            if( !e.shiftKey ) this.props.nextStep();
        }
    }
    componentDidMount(){
        this.refs.textarea.focus();
    }
    render() {
        return (
            <div className="form-group form-viewport-centered">
                <label><h3 className="title big">How do I feel now?</h3><p>(e.g. frustrated, annoyed, powerless)</p></label>
                <textarea className="form-control" rows={1} defaultValue={""} ref="textarea" onKeyUp={this.handleKeyUp} />
            </div>
        );
    }
}

class HowDoIFeelNowNumberBefore extends React.Component  {
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 5
        };
    }
    handleKeyUp(e){
        if( e.key == 'Enter' ) {
            if( !e.shiftKey ) this.props.nextStep();
        }
    }
    handleChange(e){
        if( !isNaN(e.target.value) && e.target.value <= 10 && e.target.value >= 0 ){
            this.setState({
                value: e.target.value
            });
        }
    }
    componentDidMount(){
        this.refs.textarea.focus();
    }
    render() {
        return (
            <div className="form-group form-viewport-centered">
                <label><h3 className="title big">How good I feel about what I want ?</h3><p>( 1 = terrible , 10 = great )</p></label>
                <textarea className="form-control" rows={1} value={this.state.value} ref="textarea" onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));