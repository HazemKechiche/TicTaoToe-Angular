import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 currentPlayer:boolean=false;
 gameEnd:boolean=false;
 winner:String="";
letters : any[][]=[
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
ngOnInit() {
  for ( let i =0;i<this.letters.length;i++)
  {
    
    for ( let j =0;j<this.letters[i].length;j++)
    {
      console.log(this.letters[j]);
    }
  }


}
onChangeCurrentPlayer(rowIndex:any,colIndex:any){
  if(!this.gameEnd)
  {
   if(!this.checkCase(rowIndex,colIndex)){
    if(this.currentPlayer){
      this.letters[rowIndex][colIndex]="X";
  
    }else {this.letters[rowIndex][colIndex]="O";}
   }
    this.currentPlayer=!this.currentPlayer;
    if(((this.letters[0][0]==this.letters[1][1])&&(this.letters[0][0]==this.letters[2][2])&& (this.letters[0][0]!=""))||(this.letters[2][0]==this.letters[1][1])&&(this.letters[2][0]==this.letters[0][2])&& (this.letters[2][0]!=""))
      {
        this.gameEnd=true;
        if( this.currentPlayer)
        {
          this.winner="O";
        }else{
          this.winner="X";
        }
      }
      for ( let i =0;i<this.letters.length;i++)
        {
          
          for ( let j =0;j<this.letters[i].length;j++)
          {
            if(((this.letters[i][j]==this.letters[i][j+1])&&(this.letters[i][j]==this.letters[i][j+2]))&&(this.letters[i][j]!=""))
            {
              
              this.gameEnd=true;
              if( this.currentPlayer)
              {
                this.winner="O";
              }else{
                this.winner="X";
              } 
              break;
            }
          }
          for ( let j =0;j<this.letters[i].length;j++)
            {
              if(((this.letters[i][j]==this.letters[i+1][j])&&(this.letters[i][j]==this.letters[i+2][j]))&&(this.letters[i][j]!=""))
              {
                
                this.gameEnd=true;
                if( this.currentPlayer)
                {
                  this.winner="O";
                }else{
                  this.winner="X";
                } 
                break;
              }
            }
        }
  }
 
}
onResetGame(){
  this.letters=[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  this.gameEnd=false;
}
checkCase(rowIndex:any,colIndex:any){
  if(this.letters[rowIndex][colIndex]!="")
  {
    return true;
  }
  else return false;
}

}
