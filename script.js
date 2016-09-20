class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            WhatIsItThatIDontWant: '',
            WhatDoIWant: '',
            HowDoIFeelNowBefore: '',
            HowDoIFeelNowNumberBefore: 5,
        };
        this.nextStep = this.nextStep.bind(this);
        this.saveValue = this.saveValue.bind(this);
    }
    nextStep(){
        this.setState({
            step: (this.state.step + 1)
        });
    }
    saveValue(componentName, value){
        var obj = {};
        obj[componentName] = value;
        this.setState(obj);
    }
    render(){
        switch(this.state.step) {
            case 1:
                return (
                    <WhatIsItThatIDontWant nextStep={this.nextStep} save={this.saveValue} value={this.state.WhatIsItThatIDontWant} />
                );
                break;
            case 2:
                return (
                    <WhatDoIWant nextStep={this.nextStep} save={this.saveValue} value={this.state.WhatDoIWant} />
                );
                break;
            case 3:
                return (
                    <HowDoIFeelNowBefore nextStep={this.nextStep} save={this.saveValue} value={this.state.HowDoIFeelNowBefore} />
                );
                break;
            case 4:
                return (
                    <HowDoIFeelNowNumberBefore nextStep={this.nextStep} save={this.saveValue} value={this.state.HowDoIFeelNowNumberBefore} />
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
            if( !e.shiftKey ){
                this.props.nextStep();
                this.props.save('WhatIsItThatIDontWant', this.refs.textarea.value.trim());
            }
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
                <textarea className="form-control" rows={3} defaultValue={this.props.value} ref="textarea" onKeyUp={this.handleKeyUp} />
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
            if( !e.shiftKey ){
                this.props.nextStep();
                this.props.save('WhatDoIWant', this.refs.textarea.value.trim());
            }
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
                <textarea className="form-control" rows={3} defaultValue={this.props.value} ref="textarea" onKeyUp={this.handleKeyUp} />
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
            if( !e.shiftKey ){
                this.props.nextStep();
                this.props.save('HowDoIFeelNowBefore', this.refs.textarea.value.trim());
            }
        }
    }
    componentDidMount(){
        this.refs.textarea.focus();
    }
    render() {
        return (
            <div className="form-group form-viewport-centered">
                <label><h3 className="title big">How do I feel now?</h3><p>(e.g. frustrated, annoyed, powerless)</p></label>
                <textarea className="form-control" rows={1} defaultValue={this.props.value} ref="textarea" onKeyUp={this.handleKeyUp} />
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
            value: this.props.value
        };
    }
    handleKeyUp(e){
        if( e.key == 'Enter' ) {
            if( !e.shiftKey ){
                this.props.nextStep();
                this.props.save('HowDoIFeelNowNumberBefore', this.refs.textarea.value.trim());
            }
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

// ReactDOM.render(<App />, document.getElementById('content'));