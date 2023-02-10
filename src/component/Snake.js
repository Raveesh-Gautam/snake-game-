import React, { Component } from 'react'


export default class Navbar extends Component {
  food_x = 150
  food_y = 150
  x = 100
  y = 100
  key_name = 'none'
  Arr = []
  score = 2
  state = { a: 0 }
  fun1 = (e) => {
    this.key_name = e.key
  }
  food_collide(){
    if(this.x>=this.food_x-10 &&this.x<=this.food_x+10&&this.y>=this.food_y-10&&this.y<=this.food_y+10){
      return true;
    } else{
      return false;
    }
  }
  componentWillMount() {
    setInterval(() => {
      if(this.food_collide()){
        this.food_x=Math.round(Math.random()*400)
        this.food_y=Math.round(Math.random()*400)
        this.score++;
      }
      if (this.Arr.length > this.score) {
        this.Arr.splice(0, 1)
      }
      this.Arr.push([this.x, this.y])
      switch (this.key_name) {
        case 'ArrowUp':
          this.y -= 10
          break
        case 'ArrowRight':
          this.x += 10
          break
        case 'ArrowDown':
          this.y += 10
          break
        case 'ArrowLeft':
          this.x -= 10
          break;
      }
      if(this.x>390){this.x=0}
      if(this.x<0){this.x=400}
        if(this.y>399){this.y=0}
          if(this.y<0){this.y=400}
      this.setState({ a: 0 })
    }, 200)

  }
  render() {
    return (
      <div>
<div style={{backgroundColor:'purple',height:'100vh'}}>
        <div style={{ display: "flex", flexDirection: 'column', fontSize: '45px',textAlign:'center' }}>
          < div  style={{color:'white'  }}>Welcome snake Game! press Arrow key </div>
         <div > <input  style={{width:'399px',color:"black"}} placeholder="please press here then press keys" onKeyDown={this.fun1} onFocus /></div>
          {/* <button style={{width:'100px',height:'20px',color:'black',border:'2px solid red',borderRadius:'6px',placeholder:'Start->'}} type="start"/  > */}
          <div style={{"display":"flex", "justify-content":"center","align-items":"center", "width":"full", "height":"full"}}>
            
          <div style={{ position: 'relative', width: '400px', height: '400px', border: '2px solid blue', borderRadius: '10px' }}>
            <div style={{ position: 'absolute', left: this.x, top: this.y, width: '8px', height: '8px', borderRadius: '10px', border: ' 1px solid blue', background: 'blue' }}></div>
            {
              this.Arr.map((e) =>
                <div style={{ position: 'absolute', left: e[0], top: e[1], width: '8px', height: '8px', borderRadius: '10px', border: ' 1px solid skyblue', background: 'skyblue' }}></div>
              )
            }
            <div style={{ position: 'absolute', left: this.food_x, top: this.food_y, width: '8px', height: '8px', borderRadius: '10px', border: ' 1px solid blue', background: 'green' }}></div>
          </div>

        </div>
      </div>
          </div>
      </div>
    )
  }
}



// ArrowRight ,ArrowUp,ArrowLeft,ArrowDown