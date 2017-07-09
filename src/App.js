import React from 'react';
// import PropTypes from 'prop-types'; // ES6 
// var PropTypes = require('prop-types'); // ES5 with npm
// const App = () => <h1>hello noor :D stateless function </h1>
// export default App


// class App extends React.Component{
//  render(){
//  	let txt=this.props.txt
//   return(
// <div>
// <h1 >{txt}</h1>
// <b> bold</b>
// <h1> some one like you</h1>
// </div>
// )
//   //return React.createElement('h1',null,'hello jjj')
//  }

// }
// // App.propTypes={
// // 	txt:React.propTypes.string,
// // 	cat:React.propTypes.number
// // }
// App.defaultprops ={
// 	txt:"this is default"
// }

// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state={
// 			txt:'this is the state txt',
// 			try:0
// 		}
// 	}
// 	update(e){
// 		this.setState({txt:e.target.value})

// 	}
// 	render(){
// 		return (
// 			<div>
// 			<h1>{this.state.txt}-{this.state.try}</h1>

// 			<Widget update={this.update.bind(this)}/> +
// 			<Widget update={this.update.bind(this)}/>
// 			<Widget update={this.update.bind(this)}/>

// 			</div>
// 			)

// 	}

// }

// const Widget =(props)=>
//  <input type="text"onChange={props.update}/>

/////make component inhirts from another one by props.chlidren 
// class App extends React.Component{
// 	render(){
// 		return <Button> we <Heart/> React</Button>
// 	}
// }
// const Button =(props)=> <button>{props.children}</button>

// class Heart extends React.Component{
// 	render(){
// 		return <span>&hearts;</span>
// 	}
// }
// //// make any event you make apear by text area 
// class App extends React.Component{
// 	constructor(){
// 		super();
// 		this.state={currentEvent:'---:D:D'}
// 		this.update=this.update.bind(this)
// 	}
// 	update(e){
// 		this.setState({currentEvent:e.type})
// 	}
// render(){
// 		return (
// 		<div>
// 		<textarea 
// 	  onKeyPress={ this.update}
// 	  onCopy={this.update}
// 	  onCut={this.update}
// 	  onPaste={this.update}
// 	  onFocus={this.update}
// 	  onBlur={this.update}
// 	  onDoubleClick={this.update}
// 	  onTouchStart={this.update}
// 	  onTouchMove={this.update}
// 	  onTouchEnd={this.update}
// 		cols="30" rows="10" />
// 		<h1>{this.state.currentEvent}</h1>

// 		</div>


// 		)
// }
// }

/////using Refs to access component
class App extends React.Component{
	constructor(){
		super();
		this.state={a:"",b:""}

	}
	update(e){
		this.setState({
			a:this.a.value,//1
			b:this.refs.b.value,//2
			c:this.c.refs.input.value//3
		})
	}

	render(){
		return(
			<div>
			<input
			ref={node=>this.a=node}
			type="text"
			onChange={this.update.bind(this)}
			/>{this.state.a}
			<hr/>
			<input
			ref="b"

			type="text"
			onChange={this.update.bind(this)}
			/>{this.state.b}
			<hr/>
			<Input
			ref={component=>this.c=component}
			update={this.update.bind(this)}
			
			onChange={this.update.bind(this)}
			/>{this.state.c}
		</div>
		)
}
}
class Input extends React.Component{
	render(){
		return <div><input ref="input" type="text" onChange={this.props.update}/></div>
	}
}
export default App