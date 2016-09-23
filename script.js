class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: -3,
            WhatIsItThatIDontWant: '',
            WhatDoIWant: '',
            HowDoIFeelNowBefore: '',
            HowDoIFeelNowNumberBefore: 5,
            FocusWheels: {},
        };
        this.nextStep = this.nextStep.bind(this);
        this.saveValue = this.saveValue.bind(this);
        this.saveFocusWheelValue = this.saveFocusWheelValue.bind(this);
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
    saveFocusWheelValue(index, value){
        var obj = this.state.FocusWheels;
        obj[index] = value;
        this.setState({
            FocusWheels: obj
        });
    }
    render(){
        switch(this.state.step) {
            case -3:
                return (
                    <WhatIsItThatIDontWant nextStep={this.nextStep} save={this.saveValue} value={this.state.WhatIsItThatIDontWant} />
                );
                break;
            case -2:
                return (
                    <WhatDoIWant nextStep={this.nextStep} save={this.saveValue} value={this.state.WhatDoIWant} />
                );
                break;
            case -1:
                return (
                    <HowDoIFeelNowBefore nextStep={this.nextStep} save={this.saveValue} value={this.state.HowDoIFeelNowBefore} />
                );
                break;
            case 0:
                return (
                    <HowDoIFeelNowNumberBefore nextStep={this.nextStep} save={this.saveValue} value={this.state.HowDoIFeelNowNumberBefore} />
                );
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
                return (
                    <FocusWheels nextStep={this.nextStep} saveFocusWheelValue={this.saveFocusWheelValue} currentStep={this.state.step} WhatDoIWant={this.state.WhatDoIWant} />
                );
                break;
            case 25:
                return (
                    <Results theWholeState={this.state} />
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

class FocusWheels extends React.Component {
    componentWillUpdate(nextProps){
        if( nextProps.currentStep > this.props.currentStep ) {
            $('.focus-wheel-steps').slick('slickNext');
        }
    }
    render() {
        return (
            <div className="focus-wheel-process row">
                <div className="center-statement"><h1 className="text">{this.props.WhatDoIWant}</h1></div>
                <FocusWheelsPrinter currentStep={this.props.currentStep} nextStep={this.props.nextStep} saveFocusWheelValue={this.props.saveFocusWheelValue} />
                <div className="gentle-reminder">Gently allow yourself to find a statement that feel slightly better (or as good as) the last statement.</div>
            </div>
        );
    }
}

class FocusWheelsPrinter extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    componentDidMount(){
        $('.focus-wheel-steps').on('init', function(event, slick, direction){
            this.refs['textarea-'+1].focus();
        }.bind(this));
        $('.focus-wheel-steps').slick({
            centerMode: true,
            centerPadding: '30px',
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }
    componentDidUpdate(){
        this.refs['textarea-'+this.props.currentStep].focus();
    }
    handleKeyUp(e){
        if( e.key == 'Enter' ) {
            if( !e.shiftKey ){
                this.props.saveFocusWheelValue(this.props.currentStep, this.refs['textarea-'+this.props.currentStep].value.trim());
                this.props.nextStep();
                //this.props.save('WhatIsItThatIDontWant', this.refs.textarea.value.trim());
            }
        }
    }
    render() {
        let totalSteps = 24;
        let FocusWheels = [];
        for (let i = 1; i <= totalSteps; i++) {
            FocusWheels.push(i);
        }
        return <div className="focus-wheel-steps">{FocusWheels.map(function(number, index){
            let disabledClass = ' disabled ';
            if(this.props.currentStep == number) {
                disabledClass = ' ';
            }
            return (
                <div className="focus-wheel-step form-group" key={number}>
                    <h3 className=" text text-center">{number}</h3>
                    <textarea className={"form-control focus-wheel-" + number + disabledClass} ref={'textarea-'+number} rows={5} defaultValue={""} onKeyUp={this.handleKeyUp} />
                </div>
            );
        }.bind(this))}</div>
    }
};

/*class FocusWheelStep extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    componentDidUpdate(){
        if( this.props.currentStep == this.props.index )
            this.refs['textarea'].focus();
    }
    handleKeyUp(e){
        if( e.key == 'Enter' ) {
            if( !e.shiftKey ){
                this.props.nextStep();
                //this.props.save('WhatIsItThatIDontWant', this.refs.textarea.value.trim());
            }
        }
    }
    render() {
        return (
            <div className="focus-wheel-step form-group">
                <h3 className=" text text-center">{this.props.index}</h3>
                <textarea className={"form-control focus-wheel-" + this.props.index} ref="textarea" rows={5} defaultValue={""} onKeyUp={this.handleKeyUp} />
            </div>
        );
    }
}*/

class Results extends React.Component {
    render(){
        //console.log(this.props.theWholeState);
        return (
            <div className="results text-center">
                <div>What I don't want: </div>
                <h3 className="dont-want">{this.props.theWholeState.WhatIsItThatIDontWant}</h3>
                <div>What do I want: </div>
                <h1 className="do-want">{this.props.theWholeState.WhatDoIWant}</h1>
                <div className="focus-wheels-list text-left">
                    <ol>
                        <li>{this.props.theWholeState.FocusWheels[1]}</li>
                        <li>{this.props.theWholeState.FocusWheels[2]}</li>
                        <li>{this.props.theWholeState.FocusWheels[3]}</li>
                        <li>{this.props.theWholeState.FocusWheels[4]}</li>
                        <li>{this.props.theWholeState.FocusWheels[5]}</li>
                        <li>{this.props.theWholeState.FocusWheels[6]}</li>
                        <li>{this.props.theWholeState.FocusWheels[7]}</li>
                        <li>{this.props.theWholeState.FocusWheels[8]}</li>
                        <li>{this.props.theWholeState.FocusWheels[9]}</li>
                        <li>{this.props.theWholeState.FocusWheels[10]}</li>
                        <li>{this.props.theWholeState.FocusWheels[11]}</li>
                        <li>{this.props.theWholeState.FocusWheels[12]}</li>
                        <li>{this.props.theWholeState.FocusWheels[13]}</li>
                        <li>{this.props.theWholeState.FocusWheels[14]}</li>
                        <li>{this.props.theWholeState.FocusWheels[15]}</li>
                        <li>{this.props.theWholeState.FocusWheels[16]}</li>
                        <li>{this.props.theWholeState.FocusWheels[17]}</li>
                        <li>{this.props.theWholeState.FocusWheels[18]}</li>
                        <li>{this.props.theWholeState.FocusWheels[19]}</li>
                        <li>{this.props.theWholeState.FocusWheels[20]}</li>
                        <li>{this.props.theWholeState.FocusWheels[21]}</li>
                        <li>{this.props.theWholeState.FocusWheels[22]}</li>
                        <li>{this.props.theWholeState.FocusWheels[23]}</li>
                        <li>{this.props.theWholeState.FocusWheels[24]}</li>
                    </ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));