//your code here
const bandname=['The Beatles', 'Aerosmith', 'The Rolling Stones', 'Anthrax', 'The Who'];
function strip(bandname){
	return bandname.replace(/^(a |the |an )/i, '').trim();
	
}
const sortedband=bandnames.sort((a,b)=>strip(a)>strip(b)?1:-1);
const bandlist=document.querySelector('#bands');
for(let i=0; i<sortedband.length ; i++)
	{
		const li=document.createElement('li');
	li.textContent=sortedband[li];
	bandlist.appendChild(li);
	}
