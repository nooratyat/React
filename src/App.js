import React from 'react';
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


class App extends React.Component{
	render(){
		return <Button> we <Heart/> React</Button>
	}
}
const Button =(props)=> <button>{props.children}</button>

class Heart extends React.Component{
	render(){
		return <span>&hearts;</span>
	}
}

export default App