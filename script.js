let display = ''; 
function getValue(value){

  if(isNaN(value) && isNaN( document.getElementById("result").value[ document.getElementById("result").value.length-1])){
    if((value === '.' && display.length>2))
    {
      let ec =   document.getElementById("result").value
      lastnum = getLastNum(ec)
      if(lastnum.includes('.'))
      {
        value = ''
      }
    }
    display =  document.getElementById("result").value.slice(0,-1)+value;
    if(display === '.')
    {
      display = '0.'
    }

  }else{

    if(value === '.'&& display.length>2)
    {
      let ec =   document.getElementById("result").value
      lastnum = getLastNum(ec)
      if(lastnum.includes('.'))
      {
        value = ''
      }
    }
    display += value;

  }
  if(display === '00')
    {
      display = '0'
    }
    if(display[0] === '0' && isFinite(value) && display.length<3)
    {
      display = value
    }

  document.getElementById("result").value = display
}

function solve()
{
  let ec =   document.getElementById("result").value
  display = eval(ec)
  if(!isFinite(display))
    display = '0'
  document.getElementById("result").value = display

}

function clearDisplay(){
  display = ''
  document.getElementById('result').value = '';
}

function powNumber(){
  let ec =   document.getElementById("result").value;
  let lastnum = getLastNum(ec)
  let n = ec.lastIndexOf(lastnum);
  let powresult =  eval(ec.substring(n , ) + '*' + ec.substring(n , ))
  let rez = ec.substring( 0 , n) + powresult
  display = rez
  document.getElementById("result").value = display
}

function getLastNum(value){
  let lastnum = [];
  let ec_reversed = value.split("").reverse();
  let i;
  for (i = 0; i<ec_reversed.length;i++ )
  {
    if ( !isNaN(ec_reversed[i]))
      lastnum[i] = ec_reversed[i];
    else
    {
      if (ec_reversed[i] =='.')
      	lastnum[i] = ec_reversed[i];
      else
          break;
    }
  }
  let rez = lastnum.reverse();
  rez = rez.join("");
  return rez;
}

function divedeBy(){
  let ec =   document.getElementById("result").value;
  let lastnum = getLastNum(ec)
  let n = ec.lastIndexOf(lastnum);
  let divrez =  eval('1/' + ec.substring(n , ))
  let rez = ec.substring( 0 , n) + divrez
  display = rez
  document.getElementById("result").value = display

}

function getRoot(){
  let ec =   document.getElementById("result").value;
  let lastnum = getLastNum(ec);
  let n = ec.lastIndexOf(lastnum);
  let l = Math.sqrt(lastnum, 2);
  let rez = ec.substring(0,n) + l;
  display = rez;
  document.getElementById('result').value = display;
}


function clearLastChar(){
  let ec =   document.getElementById("result").value;
  display = ec.slice(0, -1);
  document.getElementById('result').value = display;
}

function reverseSign()
{
  let ec =   document.getElementById("result").value;
  let lastnum = getLastNum(ec);
  let n = ec.lastIndexOf(lastnum);
  let sign = ec.substring(n-1,n);
  if( sign === '-')
  {
    sign = '+'
  }
  else if(sign === '+' || sign == '')
  {
    sign ='-'
  }
  else if (sign ==='*' || sign === '/')
  {
    sign += '-'
  }
  display = ec.substring(0,n-1) + sign + lastnum
  document.getElementById('result').value = display;

}
