import React from "react";
import CardList from "./CardList";
import { Performers } from "./Performers"; //複數的export 加大括號
import SearchBox from './SearchBox'
import './App.css'


// const state = {
//         Performers: Performers,
//         searchfield: '' 
// }  思考脈絡--從這邊開始--->改成寫在App class的constructor裡

class App extends React.Component  {
    
    constructor(){
       
        super()
       
        this.state = {
                Performers: Performers,
                searchfield: ''             //會動態改變的部分，用state控制
        }
    }

    onSearchChange = (e) => {   //***react的class裡面若要自己建立函式，寫成箭頭韓式才能確保裡面的this指到這個class */
                                  //如果沒有寫成箭頭函式，會因為this變成是input而出錯。
        this.setState({ searchfield: e.target.value })
 
    }

    render(){

        const filterPerformers = this.state.Performers.filter(performer=>{
        
            return performer.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        
        })
        
        console.log(filterPerformers) 

        return (
            <div className="tc">
                <h1>台灣音樂表演者2021</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList Performers={filterPerformers} />
            </div>
        )
    }
    
        
}

export default App